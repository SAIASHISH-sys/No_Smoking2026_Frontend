/**
 * Authentication utilities for managing JWT and user role
 */

const JWT_TOKEN_KEY = 'auth_token';
const USER_ROLE_KEY = 'user_role';
const USER_EMAIL_KEY = 'user_email';
const USER_ID_KEY = 'user_id';
const USER_NAME_KEY = 'user_name';

/**
 * Store authentication data in localStorage
 */
export const storeAuthData = (token: string, role: string, email: string, id?: number, name?: string) => {
  try {
    localStorage.setItem(JWT_TOKEN_KEY, token);
    localStorage.setItem(USER_ROLE_KEY, role);
    localStorage.setItem(USER_EMAIL_KEY, email);
    if (id) localStorage.setItem(USER_ID_KEY, id.toString());
    if (name) localStorage.setItem(USER_NAME_KEY, name);
  } catch (error) {
    console.error('Failed to store auth data:', error);
  }
};

/**
 * Get JWT token from localStorage
 */
export const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem(JWT_TOKEN_KEY);
  } catch (error) {
    console.error('Failed to get auth token:', error);
    return null;
  }
};

/**
 * Get user role from localStorage
 */
export const getUserRole = (): string | null => {
  try {
    return localStorage.getItem(USER_ROLE_KEY);
  } catch (error) {
    console.error('Failed to get user role:', error);
    return null;
  }
};

/**
 * Get user email from localStorage
 */
export const getUserEmail = (): string | null => {
  try {
    return localStorage.getItem(USER_EMAIL_KEY);
  } catch (error) {
    console.error('Failed to get user email:', error);
    return null;
  }
};

/**
 * Get user ID from localStorage
 */
export const getUserId = (): number | null => {
  try {
    const id = localStorage.getItem(USER_ID_KEY);
    return id ? parseInt(id) : null;
  } catch (error) {
    console.error('Failed to get user ID:', error);
    return null;
  }
};

/**
 * Get user name from localStorage
 */
export const getUserName = (): string | null => {
  try {
    return localStorage.getItem(USER_NAME_KEY);
  } catch (error) {
    console.error('Failed to get user name:', error);
    return null;
  }
};

/**
 * Get all stored user data
 */
export const getStoredUserData = () => {
  return {
    token: getAuthToken(),
    role: getUserRole(),
    email: getUserEmail(),
    id: getUserId(),
    name: getUserName(),
  };
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

/**
 * Check if user is admin
 */
export const isAdmin = (): boolean => {
  return getUserRole() === 'ADMIN';
};

/**
 * Clear all authentication data from localStorage
 */
export const clearAuthData = () => {
  try {
    localStorage.removeItem(JWT_TOKEN_KEY);
    localStorage.removeItem(USER_ROLE_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(USER_NAME_KEY);
  } catch (error) {
    console.error('Failed to clear auth data:', error);
  }
};

/**
 * Extract and store auth data from GraphQL response
 */
export const handleAuthResponse = (data: any) => {
  try {
    // For signup response
    if (data?.signUpUser) {
      const { token, role, user } = data.signUpUser;
      storeAuthData(token, role, user.email, user.id, user.name);
      return { token, role, user };
    }

    // For login response
    if (data?.login) {
      const user = data.login;
      // For login, we need to get the token from the cookie/header
      // This assumes the backend sets it in the response
      const token = localStorage.getItem(JWT_TOKEN_KEY) || '';
      storeAuthData(token, user.role, user.email, user.id, user.name);
      return { user };
    }

    return null;
  } catch (error) {
    console.error('Failed to handle auth response:', error);
    return null;
  }
};
