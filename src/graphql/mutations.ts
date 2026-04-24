import { gql } from "@apollo/client";

/**
 * Mutation: Send verification OTP to email
 */
export const SEND_VERIFICATION_OTP = gql`
  mutation SendVerificationOtp($email: String!) {
    sendVerificationOtp(email: $email)
  }
`;

/**
 * Mutation: Verify OTP and get verification token
 */
export const VERIFY_OTP = gql`
  mutation VerifyOtp($email: String!, $otp: String!) {
    verifyOtp(email: $email, otp: $otp)
  }
`;

/**
 * Mutation: Sign up user with verified email
 */
export const SIGN_UP_USER = gql`
  mutation SignUpUser($data: SignUpInput!, $verificationToken: String!) {
    signUpUser(data: $data, verificationToken: $verificationToken) {
      token
      role
      user {
        id
        email
        name
        age
        mobileNo
        role
        campaignId
      }
    }
  }
`;

/**
 * Mutation: Login user
 */
export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      email
      name
      role
      age
      mobileNo
      isVerified
      campaignId
      createdAt
    }
  }
`;

/**
 * Mutation: Update user registration payment status (Admin only)
 */
export const UPDATE_USER_PAYMENT_STATUS = gql`
  mutation UpdateUserPaymentStatus($userId: Float!, $status: OrderStatus!) {
    updateUserPaymentStatus(userId: $userId, status: $status) {
      id
      paymentStatus
    }
  }
`;

/**
 * Mutation: Update purchase payment status (Admin only)
 */
export const UPDATE_PURCHASE_PAYMENT_STATUS = gql`
  mutation UpdatePurchasePaymentStatus($purchaseId: Float!, $status: OrderStatus!) {
    updatePurchasePaymentStatus(purchaseId: $purchaseId, status: $status) {
      id
      qty
      size
      status
      createdAt
      merch {
        id
        name
        price
      }
      user {
        id
        email
        name
      }
    }
  }
`;

/**
 * Mutation: Create Razorpay order for merchandise purchase
 */
export const CREATE_MERCH_PURCHASE_ORDER = gql`
  mutation CreateMerchPurchaseOrder($purchaseId: Float!, $amount: Float!) {
    createMerchPurchaseOrder(purchaseId: $purchaseId, amount: $amount)
  }
`;

/**
 * Mutation: Verify merchandise payment and update records
 */
export const VERIFY_MERCH_PAYMENT = gql`
  mutation VerifyMerchPayment(
    $purchaseId: Float!
    $razorpayPaymentId: String!
    $razorpaySignature: String!
  ) {
    verifyMerchPayment(
      purchaseId: $purchaseId
      razorpayPaymentId: $razorpayPaymentId
      razorpaySignature: $razorpaySignature
    ) {
      id
      qty
      size
      status
      razorpayOrderId
      razorpayPaymentId
      createdAt
      merch {
        id
        name
        price
      }
      user {
        id
        email
        name
      }
    }
  }
`;

/**
 * Mutation: Create Razorpay order for registration
 */
export const CREATE_REGISTRATION_ORDER = gql`
  mutation CreateRegistrationOrder($amount: Float!) {
    createRegistrationOrder(amount: $amount)
  }
`;

/**
 * Mutation: Verify registration payment and update user
 */
export const VERIFY_REGISTRATION_PAYMENT = gql`
  mutation VerifyRegistrationPayment(
    $razorpayOrderId: String!
    $razorpayPaymentId: String!
    $razorpaySignature: String!
  ) {
    verifyRegistrationPayment(
      razorpayOrderId: $razorpayOrderId
      razorpayPaymentId: $razorpayPaymentId
      razorpaySignature: $razorpaySignature
    ) {
      id
      email
      name
      role
      registrationrazorpayOrderId
      registrationrazorpayPaymentId
    }
  }
`;
