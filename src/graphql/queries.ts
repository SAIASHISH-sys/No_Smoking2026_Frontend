import { gql } from "@apollo/client";

export const GET_ALL_MERCH = gql`
  query GetAllMerch {
    getAllMerch {
      id
      name
      price
    }
  }
`;

export const GET_USER_PURCHASES = gql`
  query GetUserPurchases {
    getUserPurchases {
      id
      qty
      size
      status
      createdAt
      razorpayOrderId
      razorpayPaymentId
      merch {
        id
        name
        price
      }
    }
  }
`;

export const GET_ALL_USER_PURCHASES = gql`
  query GetAllUserPurchases {
    getAllUserPurchases {
      id
      qty
      size
      status
      createdAt
      razorpayOrderId
      razorpayPaymentId
      campaignId
      merch {
        id
        name
        price
      }
      user {
        id
        email
        name
        campaignId
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      email
      campaignId
      age
      mobileNo
      role
      paymentStatus
      registrationrazorpayOrderId
      registrationrazorpayPaymentId
      isVerified
      createdAt
      purchases {
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
      }
    }
  }
`;
