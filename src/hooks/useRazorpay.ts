import { useState } from 'react';

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface RazorpayCheckoutOptions {
  orderId: string;
  amount: number; // rupees — hook converts to paise
  name?: string;
  description?: string;
  prefill?: { name?: string; email?: string; contact?: string };
  onSuccess: (response: RazorpayPaymentResponse) => Promise<void> | void;
  onDismiss?: () => void;
}

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById('razorpay-script')) { resolve(); return; }
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
    document.body.appendChild(script);
  });
}

export function useRazorpay() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiatePayment = async (options: RazorpayCheckoutOptions) => {
    setLoading(true);
    setError(null);

    try {
      await loadScript();

      await new Promise<void>((resolve, reject) => {
        const rzp = new window.Razorpay({
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: Math.round(options.amount * 100),
          currency: 'INR',
          name: options.name ?? 'No Smoking Campaign',
          description: options.description ?? '',
          order_id: options.orderId,
          prefill: options.prefill ?? {},
          theme: { color: '#ea580c' },
          handler: async (response: RazorpayPaymentResponse) => {
            try {
              await options.onSuccess(response);
              resolve();
            } catch (err) {
              reject(err);
            }
          },
          modal: {
            ondismiss: () => {
              options.onDismiss?.();
              resolve();
            },
          },
        });
        rzp.open();
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Payment failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return { initiatePayment, loading, error, clearError: () => setError(null) };
}
