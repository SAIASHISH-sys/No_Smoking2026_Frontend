import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateMerch = {
  __typename?: 'AggregateMerch';
  _avg?: Maybe<MerchAvgAggregate>;
  _count?: Maybe<MerchCountAggregate>;
  _max?: Maybe<MerchMaxAggregate>;
  _min?: Maybe<MerchMinAggregate>;
  _sum?: Maybe<MerchSumAggregate>;
};

export type AggregateOtpVerification = {
  __typename?: 'AggregateOTPVerification';
  _count?: Maybe<OtpVerificationCountAggregate>;
  _max?: Maybe<OtpVerificationMaxAggregate>;
  _min?: Maybe<OtpVerificationMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserPurchase = {
  __typename?: 'AggregateUserPurchase';
  _avg?: Maybe<UserPurchaseAvgAggregate>;
  _count?: Maybe<UserPurchaseCountAggregate>;
  _max?: Maybe<UserPurchaseMaxAggregate>;
  _min?: Maybe<UserPurchaseMinAggregate>;
  _sum?: Maybe<UserPurchaseSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CreateManyAndReturnMerch = {
  __typename?: 'CreateManyAndReturnMerch';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type CreateManyAndReturnOtpVerification = {
  __typename?: 'CreateManyAndReturnOTPVerification';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  otp: Scalars['String']['output'];
};

export type CreateManyAndReturnUser = {
  __typename?: 'CreateManyAndReturnUser';
  age?: Maybe<Scalars['Int']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  dob?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isVerified: Scalars['Boolean']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  otp?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  qrtoken?: Maybe<Scalars['String']['output']>;
  registrationrazorpayOrderId?: Maybe<Scalars['String']['output']>;
  registrationrazorpayPaymentId?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type CreateManyAndReturnUserPurchase = {
  __typename?: 'CreateManyAndReturnUserPurchase';
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  isPaid: Scalars['Boolean']['output'];
  merch: Merch;
  merchId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
  razorpayOrderId?: Maybe<Scalars['String']['output']>;
  razorpayPaymentId?: Maybe<Scalars['String']['output']>;
  size: Scalars['String']['output'];
  status: OrderStatus;
  user: User;
  userId: Scalars['Int']['output'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<OrderStatus>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumroleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumroleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumroleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumroleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumroleFilter>;
  _min?: InputMaybe<NestedEnumroleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumroleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Merch = {
  __typename?: 'Merch';
  _count?: Maybe<MerchCount>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  purchases: Array<UserPurchase>;
};


export type MerchPurchasesArgs = {
  cursor?: InputMaybe<UserPurchaseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserPurchaseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};

export type MerchAvgAggregate = {
  __typename?: 'MerchAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type MerchAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type MerchCount = {
  __typename?: 'MerchCount';
  purchases: Scalars['Int']['output'];
};


export type MerchCountPurchasesArgs = {
  where?: InputMaybe<UserPurchaseWhereInput>;
};

export type MerchCountAggregate = {
  __typename?: 'MerchCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
};

export type MerchCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type MerchCreateInput = {
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  purchases?: InputMaybe<UserPurchaseCreateNestedManyWithoutMerchInput>;
};

export type MerchCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type MerchCreateNestedOneWithoutPurchasesInput = {
  connect?: InputMaybe<MerchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MerchCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<MerchCreateWithoutPurchasesInput>;
};

export type MerchCreateOrConnectWithoutPurchasesInput = {
  create: MerchCreateWithoutPurchasesInput;
  where: MerchWhereUniqueInput;
};

export type MerchCreateWithoutPurchasesInput = {
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type MerchGroupBy = {
  __typename?: 'MerchGroupBy';
  _avg?: Maybe<MerchAvgAggregate>;
  _count?: Maybe<MerchCountAggregate>;
  _max?: Maybe<MerchMaxAggregate>;
  _min?: Maybe<MerchMinAggregate>;
  _sum?: Maybe<MerchSumAggregate>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type MerchMaxAggregate = {
  __typename?: 'MerchMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type MerchMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type MerchMinAggregate = {
  __typename?: 'MerchMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type MerchMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type MerchOrderByWithAggregationInput = {
  _avg?: InputMaybe<MerchAvgOrderByAggregateInput>;
  _count?: InputMaybe<MerchCountOrderByAggregateInput>;
  _max?: InputMaybe<MerchMaxOrderByAggregateInput>;
  _min?: InputMaybe<MerchMinOrderByAggregateInput>;
  _sum?: InputMaybe<MerchSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type MerchOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  purchases?: InputMaybe<UserPurchaseOrderByRelationAggregateInput>;
};

export type MerchRelationFilter = {
  is?: InputMaybe<MerchWhereInput>;
  isNot?: InputMaybe<MerchWhereInput>;
};

export enum MerchScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Price = 'price'
}

export type MerchScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MerchScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MerchScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MerchScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
};

export type MerchSumAggregate = {
  __typename?: 'MerchSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type MerchSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type MerchUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  purchases?: InputMaybe<UserPurchaseUpdateManyWithoutMerchNestedInput>;
};

export type MerchUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MerchUpdateOneRequiredWithoutPurchasesNestedInput = {
  connect?: InputMaybe<MerchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MerchCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<MerchCreateWithoutPurchasesInput>;
  update?: InputMaybe<MerchUpdateToOneWithWhereWithoutPurchasesInput>;
  upsert?: InputMaybe<MerchUpsertWithoutPurchasesInput>;
};

export type MerchUpdateToOneWithWhereWithoutPurchasesInput = {
  data: MerchUpdateWithoutPurchasesInput;
  where?: InputMaybe<MerchWhereInput>;
};

export type MerchUpdateWithoutPurchasesInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MerchUpsertWithoutPurchasesInput = {
  create: MerchCreateWithoutPurchasesInput;
  update: MerchUpdateWithoutPurchasesInput;
  where?: InputMaybe<MerchWhereInput>;
};

export type MerchWhereInput = {
  AND?: InputMaybe<Array<MerchWhereInput>>;
  NOT?: InputMaybe<Array<MerchWhereInput>>;
  OR?: InputMaybe<Array<MerchWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  purchases?: InputMaybe<UserPurchaseListRelationFilter>;
};

export type MerchWhereUniqueInput = {
  AND?: InputMaybe<Array<MerchWhereInput>>;
  NOT?: InputMaybe<Array<MerchWhereInput>>;
  OR?: InputMaybe<Array<MerchWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  purchases?: InputMaybe<UserPurchaseListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAndReturnMerch: Array<CreateManyAndReturnMerch>;
  createManyAndReturnOTPVerification: Array<CreateManyAndReturnOtpVerification>;
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyAndReturnUserPurchase: Array<CreateManyAndReturnUserPurchase>;
  createManyMerch: AffectedRowsOutput;
  createManyOTPVerification: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserPurchase: AffectedRowsOutput;
  createOneMerch: Merch;
  createOneOTPVerification: OtpVerification;
  createOneUser: User;
  createOneUserPurchase: UserPurchase;
  deleteManyMerch: AffectedRowsOutput;
  deleteManyOTPVerification: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserPurchase: AffectedRowsOutput;
  deleteOneMerch?: Maybe<Merch>;
  deleteOneOTPVerification?: Maybe<OtpVerification>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserPurchase?: Maybe<UserPurchase>;
  login: User;
  sendVerificationOtp: Scalars['Boolean']['output'];
  signUpUser: SignUpOutput;
  updateManyMerch: AffectedRowsOutput;
  updateManyOTPVerification: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserPurchase: AffectedRowsOutput;
  updateOneMerch?: Maybe<Merch>;
  updateOneOTPVerification?: Maybe<OtpVerification>;
  updateOneUser?: Maybe<User>;
  updateOneUserPurchase?: Maybe<UserPurchase>;
  updatePurchasePaymentStatus: UserPurchase;
  upsertOneMerch: Merch;
  upsertOneOTPVerification: OtpVerification;
  upsertOneUser: User;
  upsertOneUserPurchase: UserPurchase;
  verifyOtp: Scalars['String']['output'];
};


export type MutationCreateManyAndReturnMerchArgs = {
  data: Array<MerchCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnOtpVerificationArgs = {
  data: Array<OtpVerificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnUserPurchaseArgs = {
  data: Array<UserPurchaseCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMerchArgs = {
  data: Array<MerchCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOtpVerificationArgs = {
  data: Array<OtpVerificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserPurchaseArgs = {
  data: Array<UserPurchaseCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneMerchArgs = {
  data: MerchCreateInput;
};


export type MutationCreateOneOtpVerificationArgs = {
  data: OtpVerificationCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserPurchaseArgs = {
  data: UserPurchaseCreateInput;
};


export type MutationDeleteManyMerchArgs = {
  where?: InputMaybe<MerchWhereInput>;
};


export type MutationDeleteManyOtpVerificationArgs = {
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserPurchaseArgs = {
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type MutationDeleteOneMerchArgs = {
  where: MerchWhereUniqueInput;
};


export type MutationDeleteOneOtpVerificationArgs = {
  where: OtpVerificationWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserPurchaseArgs = {
  where: UserPurchaseWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSendVerificationOtpArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignUpUserArgs = {
  data: SignUpInput;
  verificationToken: Scalars['String']['input'];
};


export type MutationUpdateManyMerchArgs = {
  data: MerchUpdateManyMutationInput;
  where?: InputMaybe<MerchWhereInput>;
};


export type MutationUpdateManyOtpVerificationArgs = {
  data: OtpVerificationUpdateManyMutationInput;
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserPurchaseArgs = {
  data: UserPurchaseUpdateManyMutationInput;
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type MutationUpdateOneMerchArgs = {
  data: MerchUpdateInput;
  where: MerchWhereUniqueInput;
};


export type MutationUpdateOneOtpVerificationArgs = {
  data: OtpVerificationUpdateInput;
  where: OtpVerificationWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserPurchaseArgs = {
  data: UserPurchaseUpdateInput;
  where: UserPurchaseWhereUniqueInput;
};


export type MutationUpdatePurchasePaymentStatusArgs = {
  isPaid: Scalars['Boolean']['input'];
  purchaseId: Scalars['Float']['input'];
};


export type MutationUpsertOneMerchArgs = {
  create: MerchCreateInput;
  update: MerchUpdateInput;
  where: MerchWhereUniqueInput;
};


export type MutationUpsertOneOtpVerificationArgs = {
  create: OtpVerificationCreateInput;
  update: OtpVerificationUpdateInput;
  where: OtpVerificationWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserPurchaseArgs = {
  create: UserPurchaseCreateInput;
  update: UserPurchaseUpdateInput;
  where: UserPurchaseWhereUniqueInput;
};


export type MutationVerifyOtpArgs = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumroleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumroleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumroleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumroleFilter>;
  _min?: InputMaybe<NestedEnumroleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumroleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type OtpVerification = {
  __typename?: 'OTPVerification';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  otp: Scalars['String']['output'];
};

export type OtpVerificationCountAggregate = {
  __typename?: 'OTPVerificationCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  otp: Scalars['Int']['output'];
};

export type OtpVerificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
};

export type OtpVerificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type OtpVerificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type OtpVerificationGroupBy = {
  __typename?: 'OTPVerificationGroupBy';
  _count?: Maybe<OtpVerificationCountAggregate>;
  _max?: Maybe<OtpVerificationMaxAggregate>;
  _min?: Maybe<OtpVerificationMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  otp: Scalars['String']['output'];
};

export type OtpVerificationMaxAggregate = {
  __typename?: 'OTPVerificationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['String']['output']>;
};

export type OtpVerificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
};

export type OtpVerificationMinAggregate = {
  __typename?: 'OTPVerificationMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['String']['output']>;
};

export type OtpVerificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
};

export type OtpVerificationOrderByWithAggregationInput = {
  _count?: InputMaybe<OtpVerificationCountOrderByAggregateInput>;
  _max?: InputMaybe<OtpVerificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<OtpVerificationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
};

export type OtpVerificationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
};

export enum OtpVerificationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Otp = 'otp'
}

export type OtpVerificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OtpVerificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OtpVerificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OtpVerificationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  otp?: InputMaybe<StringWithAggregatesFilter>;
};

export type OtpVerificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OtpVerificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OtpVerificationWhereInput = {
  AND?: InputMaybe<Array<OtpVerificationWhereInput>>;
  NOT?: InputMaybe<Array<OtpVerificationWhereInput>>;
  OR?: InputMaybe<Array<OtpVerificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  otp?: InputMaybe<StringFilter>;
};

export type OtpVerificationWhereUniqueInput = {
  AND?: InputMaybe<Array<OtpVerificationWhereInput>>;
  NOT?: InputMaybe<Array<OtpVerificationWhereInput>>;
  OR?: InputMaybe<Array<OtpVerificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<StringFilter>;
};

export enum OrderStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type Query = {
  __typename?: 'Query';
  aggregateMerch: AggregateMerch;
  aggregateOTPVerification: AggregateOtpVerification;
  aggregateUser: AggregateUser;
  aggregateUserPurchase: AggregateUserPurchase;
  findFirstMerch?: Maybe<Merch>;
  findFirstMerchOrThrow?: Maybe<Merch>;
  findFirstOTPVerification?: Maybe<OtpVerification>;
  findFirstOTPVerificationOrThrow?: Maybe<OtpVerification>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUserPurchase?: Maybe<UserPurchase>;
  findFirstUserPurchaseOrThrow?: Maybe<UserPurchase>;
  getAllMerch: Array<Merch>;
  getAllUserPurchases: Array<UserPurchase>;
  getMerch?: Maybe<Merch>;
  getOTPVerification?: Maybe<OtpVerification>;
  getUser?: Maybe<User>;
  getUserPurchase?: Maybe<UserPurchase>;
  getUserPurchases: Array<UserPurchase>;
  groupByMerch: Array<MerchGroupBy>;
  groupByOTPVerification: Array<OtpVerificationGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserPurchase: Array<UserPurchaseGroupBy>;
  merch?: Maybe<Merch>;
  merches: Array<Merch>;
  oTPVerification?: Maybe<OtpVerification>;
  oTPVerifications: Array<OtpVerification>;
  user?: Maybe<User>;
  userPurchase?: Maybe<UserPurchase>;
  userPurchases: Array<UserPurchase>;
  users: Array<User>;
};


export type QueryAggregateMerchArgs = {
  cursor?: InputMaybe<MerchWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MerchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerchWhereInput>;
};


export type QueryAggregateOtpVerificationArgs = {
  cursor?: InputMaybe<OtpVerificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OtpVerificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserPurchaseArgs = {
  cursor?: InputMaybe<UserPurchaseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type QueryFindFirstMerchArgs = {
  cursor?: InputMaybe<MerchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerchWhereInput>;
};


export type QueryFindFirstMerchOrThrowArgs = {
  cursor?: InputMaybe<MerchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerchWhereInput>;
};


export type QueryFindFirstOtpVerificationArgs = {
  cursor?: InputMaybe<OtpVerificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OtpVerificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OtpVerificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type QueryFindFirstOtpVerificationOrThrowArgs = {
  cursor?: InputMaybe<OtpVerificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OtpVerificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OtpVerificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserPurchaseArgs = {
  cursor?: InputMaybe<UserPurchaseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserPurchaseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type QueryFindFirstUserPurchaseOrThrowArgs = {
  cursor?: InputMaybe<UserPurchaseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserPurchaseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type QueryGetMerchArgs = {
  where: MerchWhereUniqueInput;
};


export type QueryGetOtpVerificationArgs = {
  where: OtpVerificationWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetUserPurchaseArgs = {
  where: UserPurchaseWhereUniqueInput;
};


export type QueryGroupByMerchArgs = {
  by: Array<MerchScalarFieldEnum>;
  having?: InputMaybe<MerchScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MerchOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerchWhereInput>;
};


export type QueryGroupByOtpVerificationArgs = {
  by: Array<OtpVerificationScalarFieldEnum>;
  having?: InputMaybe<OtpVerificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OtpVerificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserPurchaseArgs = {
  by: Array<UserPurchaseScalarFieldEnum>;
  having?: InputMaybe<UserPurchaseScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type QueryMerchArgs = {
  where: MerchWhereUniqueInput;
};


export type QueryMerchesArgs = {
  cursor?: InputMaybe<MerchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MerchWhereInput>;
};


export type QueryOTpVerificationArgs = {
  where: OtpVerificationWhereUniqueInput;
};


export type QueryOTpVerificationsArgs = {
  cursor?: InputMaybe<OtpVerificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OtpVerificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OtpVerificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OtpVerificationWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserPurchaseArgs = {
  where: UserPurchaseWhereUniqueInput;
};


export type QueryUserPurchasesArgs = {
  cursor?: InputMaybe<UserPurchaseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserPurchaseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SignUpInput = {
  age: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpOutput = {
  __typename?: 'SignUpOutput';
  role: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  age?: Maybe<Scalars['Int']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  dob?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isVerified: Scalars['Boolean']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  otp?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  purchases: Array<UserPurchase>;
  qrtoken?: Maybe<Scalars['String']['output']>;
  registrationrazorpayOrderId?: Maybe<Scalars['String']['output']>;
  registrationrazorpayPaymentId?: Maybe<Scalars['String']['output']>;
  role: Role;
};


export type UserPurchasesArgs = {
  cursor?: InputMaybe<UserPurchaseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserPurchaseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserPurchaseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserPurchaseWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  age?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  purchases: Scalars['Int']['output'];
};


export type UserCountPurchasesArgs = {
  where?: InputMaybe<UserPurchaseWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  age: Scalars['Int']['output'];
  campaignId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dob: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  googleId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isVerified: Scalars['Int']['output'];
  mobileNo: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  otp: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  qrtoken: Scalars['Int']['output'];
  registrationrazorpayOrderId: Scalars['Int']['output'];
  registrationrazorpayPaymentId: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  campaignId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  mobileNo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  qrtoken?: InputMaybe<SortOrder>;
  registrationrazorpayOrderId?: InputMaybe<SortOrder>;
  registrationrazorpayPaymentId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dob?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  purchases?: InputMaybe<UserPurchaseCreateNestedManyWithoutUserInput>;
  qrtoken?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UserCreateManyInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dob?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  qrtoken?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UserCreateNestedOneWithoutPurchasesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<UserCreateWithoutPurchasesInput>;
};

export type UserCreateOrConnectWithoutPurchasesInput = {
  create: UserCreateWithoutPurchasesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPurchasesInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dob?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  qrtoken?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  age?: Maybe<Scalars['Int']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  dob?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isVerified: Scalars['Boolean']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  otp?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  qrtoken?: Maybe<Scalars['String']['output']>;
  registrationrazorpayOrderId?: Maybe<Scalars['String']['output']>;
  registrationrazorpayPaymentId?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  age?: Maybe<Scalars['Int']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dob?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  qrtoken?: Maybe<Scalars['String']['output']>;
  registrationrazorpayOrderId?: Maybe<Scalars['String']['output']>;
  registrationrazorpayPaymentId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  campaignId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  mobileNo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  qrtoken?: InputMaybe<SortOrder>;
  registrationrazorpayOrderId?: InputMaybe<SortOrder>;
  registrationrazorpayPaymentId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  age?: Maybe<Scalars['Int']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dob?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  qrtoken?: Maybe<Scalars['String']['output']>;
  registrationrazorpayOrderId?: Maybe<Scalars['String']['output']>;
  registrationrazorpayPaymentId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  campaignId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  mobileNo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  qrtoken?: InputMaybe<SortOrder>;
  registrationrazorpayOrderId?: InputMaybe<SortOrder>;
  registrationrazorpayPaymentId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrderInput>;
  campaignId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  mobileNo?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  qrtoken?: InputMaybe<SortOrderInput>;
  registrationrazorpayOrderId?: InputMaybe<SortOrderInput>;
  registrationrazorpayPaymentId?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  age?: InputMaybe<SortOrderInput>;
  campaignId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  mobileNo?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  purchases?: InputMaybe<UserPurchaseOrderByRelationAggregateInput>;
  qrtoken?: InputMaybe<SortOrderInput>;
  registrationrazorpayOrderId?: InputMaybe<SortOrderInput>;
  registrationrazorpayPaymentId?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
};

export type UserPurchase = {
  __typename?: 'UserPurchase';
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  isPaid: Scalars['Boolean']['output'];
  merch: Merch;
  merchId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
  razorpayOrderId?: Maybe<Scalars['String']['output']>;
  razorpayPaymentId?: Maybe<Scalars['String']['output']>;
  size: Scalars['String']['output'];
  status: OrderStatus;
  user: User;
  userId: Scalars['Int']['output'];
};

export type UserPurchaseAvgAggregate = {
  __typename?: 'UserPurchaseAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  merchId?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UserPurchaseAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserPurchaseCountAggregate = {
  __typename?: 'UserPurchaseCountAggregate';
  _all: Scalars['Int']['output'];
  campaignId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isPaid: Scalars['Int']['output'];
  merchId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
  razorpayOrderId: Scalars['Int']['output'];
  razorpayPaymentId: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserPurchaseCountOrderByAggregateInput = {
  campaignId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPaid?: InputMaybe<SortOrder>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  razorpayOrderId?: InputMaybe<SortOrder>;
  razorpayPaymentId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserPurchaseCreateInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  merch: MerchCreateNestedOneWithoutPurchasesInput;
  qty: Scalars['Int']['input'];
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  user: UserCreateNestedOneWithoutPurchasesInput;
};

export type UserPurchaseCreateManyInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  merchId: Scalars['Int']['input'];
  qty: Scalars['Int']['input'];
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  userId: Scalars['Int']['input'];
};

export type UserPurchaseCreateManyMerchInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  qty: Scalars['Int']['input'];
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  userId: Scalars['Int']['input'];
};

export type UserPurchaseCreateManyMerchInputEnvelope = {
  data: Array<UserPurchaseCreateManyMerchInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserPurchaseCreateManyUserInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  merchId: Scalars['Int']['input'];
  qty: Scalars['Int']['input'];
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
};

export type UserPurchaseCreateManyUserInputEnvelope = {
  data: Array<UserPurchaseCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserPurchaseCreateNestedManyWithoutMerchInput = {
  connect?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserPurchaseCreateOrConnectWithoutMerchInput>>;
  create?: InputMaybe<Array<UserPurchaseCreateWithoutMerchInput>>;
  createMany?: InputMaybe<UserPurchaseCreateManyMerchInputEnvelope>;
};

export type UserPurchaseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserPurchaseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserPurchaseCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserPurchaseCreateManyUserInputEnvelope>;
};

export type UserPurchaseCreateOrConnectWithoutMerchInput = {
  create: UserPurchaseCreateWithoutMerchInput;
  where: UserPurchaseWhereUniqueInput;
};

export type UserPurchaseCreateOrConnectWithoutUserInput = {
  create: UserPurchaseCreateWithoutUserInput;
  where: UserPurchaseWhereUniqueInput;
};

export type UserPurchaseCreateWithoutMerchInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  qty: Scalars['Int']['input'];
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  user: UserCreateNestedOneWithoutPurchasesInput;
};

export type UserPurchaseCreateWithoutUserInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  merch: MerchCreateNestedOneWithoutPurchasesInput;
  qty: Scalars['Int']['input'];
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
};

export type UserPurchaseGroupBy = {
  __typename?: 'UserPurchaseGroupBy';
  _avg?: Maybe<UserPurchaseAvgAggregate>;
  _count?: Maybe<UserPurchaseCountAggregate>;
  _max?: Maybe<UserPurchaseMaxAggregate>;
  _min?: Maybe<UserPurchaseMinAggregate>;
  _sum?: Maybe<UserPurchaseSumAggregate>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  isPaid: Scalars['Boolean']['output'];
  merchId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
  razorpayOrderId?: Maybe<Scalars['String']['output']>;
  razorpayPaymentId?: Maybe<Scalars['String']['output']>;
  size: Scalars['String']['output'];
  status: OrderStatus;
  userId: Scalars['Int']['output'];
};

export type UserPurchaseListRelationFilter = {
  every?: InputMaybe<UserPurchaseWhereInput>;
  none?: InputMaybe<UserPurchaseWhereInput>;
  some?: InputMaybe<UserPurchaseWhereInput>;
};

export type UserPurchaseMaxAggregate = {
  __typename?: 'UserPurchaseMaxAggregate';
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  merchId?: Maybe<Scalars['Int']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  razorpayOrderId?: Maybe<Scalars['String']['output']>;
  razorpayPaymentId?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchaseMaxOrderByAggregateInput = {
  campaignId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPaid?: InputMaybe<SortOrder>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  razorpayOrderId?: InputMaybe<SortOrder>;
  razorpayPaymentId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserPurchaseMinAggregate = {
  __typename?: 'UserPurchaseMinAggregate';
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  merchId?: Maybe<Scalars['Int']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  razorpayOrderId?: Maybe<Scalars['String']['output']>;
  razorpayPaymentId?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchaseMinOrderByAggregateInput = {
  campaignId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPaid?: InputMaybe<SortOrder>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  razorpayOrderId?: InputMaybe<SortOrder>;
  razorpayPaymentId?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserPurchaseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserPurchaseOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserPurchaseAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserPurchaseCountOrderByAggregateInput>;
  _max?: InputMaybe<UserPurchaseMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserPurchaseMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserPurchaseSumOrderByAggregateInput>;
  campaignId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPaid?: InputMaybe<SortOrder>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  razorpayOrderId?: InputMaybe<SortOrderInput>;
  razorpayPaymentId?: InputMaybe<SortOrderInput>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserPurchaseOrderByWithRelationInput = {
  campaignId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPaid?: InputMaybe<SortOrder>;
  merch?: InputMaybe<MerchOrderByWithRelationInput>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  razorpayOrderId?: InputMaybe<SortOrderInput>;
  razorpayPaymentId?: InputMaybe<SortOrderInput>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserPurchaseScalarFieldEnum {
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPaid = 'isPaid',
  MerchId = 'merchId',
  Qty = 'qty',
  RazorpayOrderId = 'razorpayOrderId',
  RazorpayPaymentId = 'razorpayPaymentId',
  Size = 'size',
  Status = 'status',
  UserId = 'userId'
}

export type UserPurchaseScalarWhereInput = {
  AND?: InputMaybe<Array<UserPurchaseScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserPurchaseScalarWhereInput>>;
  OR?: InputMaybe<Array<UserPurchaseScalarWhereInput>>;
  campaignId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  isPaid?: InputMaybe<BoolFilter>;
  merchId?: InputMaybe<IntFilter>;
  qty?: InputMaybe<IntFilter>;
  razorpayOrderId?: InputMaybe<StringNullableFilter>;
  razorpayPaymentId?: InputMaybe<StringNullableFilter>;
  size?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserPurchaseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserPurchaseScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserPurchaseScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserPurchaseScalarWhereWithAggregatesInput>>;
  campaignId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isPaid?: InputMaybe<BoolWithAggregatesFilter>;
  merchId?: InputMaybe<IntWithAggregatesFilter>;
  qty?: InputMaybe<IntWithAggregatesFilter>;
  razorpayOrderId?: InputMaybe<StringNullableWithAggregatesFilter>;
  razorpayPaymentId?: InputMaybe<StringNullableWithAggregatesFilter>;
  size?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumOrderStatusWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserPurchaseSumAggregate = {
  __typename?: 'UserPurchaseSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  merchId?: Maybe<Scalars['Int']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchaseSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  merchId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserPurchaseUpdateInput = {
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  merch?: InputMaybe<MerchUpdateOneRequiredWithoutPurchasesNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
  razorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  razorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  size?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesNestedInput>;
};

export type UserPurchaseUpdateManyMutationInput = {
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
  razorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  razorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  size?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
};

export type UserPurchaseUpdateManyWithWhereWithoutMerchInput = {
  data: UserPurchaseUpdateManyMutationInput;
  where: UserPurchaseScalarWhereInput;
};

export type UserPurchaseUpdateManyWithWhereWithoutUserInput = {
  data: UserPurchaseUpdateManyMutationInput;
  where: UserPurchaseScalarWhereInput;
};

export type UserPurchaseUpdateManyWithoutMerchNestedInput = {
  connect?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserPurchaseCreateOrConnectWithoutMerchInput>>;
  create?: InputMaybe<Array<UserPurchaseCreateWithoutMerchInput>>;
  createMany?: InputMaybe<UserPurchaseCreateManyMerchInputEnvelope>;
  delete?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserPurchaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  set?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  update?: InputMaybe<Array<UserPurchaseUpdateWithWhereUniqueWithoutMerchInput>>;
  updateMany?: InputMaybe<Array<UserPurchaseUpdateManyWithWhereWithoutMerchInput>>;
  upsert?: InputMaybe<Array<UserPurchaseUpsertWithWhereUniqueWithoutMerchInput>>;
};

export type UserPurchaseUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserPurchaseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserPurchaseCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserPurchaseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserPurchaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  set?: InputMaybe<Array<UserPurchaseWhereUniqueInput>>;
  update?: InputMaybe<Array<UserPurchaseUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserPurchaseUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserPurchaseUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserPurchaseUpdateWithWhereUniqueWithoutMerchInput = {
  data: UserPurchaseUpdateWithoutMerchInput;
  where: UserPurchaseWhereUniqueInput;
};

export type UserPurchaseUpdateWithWhereUniqueWithoutUserInput = {
  data: UserPurchaseUpdateWithoutUserInput;
  where: UserPurchaseWhereUniqueInput;
};

export type UserPurchaseUpdateWithoutMerchInput = {
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
  razorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  razorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  size?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesNestedInput>;
};

export type UserPurchaseUpdateWithoutUserInput = {
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  merch?: InputMaybe<MerchUpdateOneRequiredWithoutPurchasesNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
  razorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  razorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  size?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
};

export type UserPurchaseUpsertWithWhereUniqueWithoutMerchInput = {
  create: UserPurchaseCreateWithoutMerchInput;
  update: UserPurchaseUpdateWithoutMerchInput;
  where: UserPurchaseWhereUniqueInput;
};

export type UserPurchaseUpsertWithWhereUniqueWithoutUserInput = {
  create: UserPurchaseCreateWithoutUserInput;
  update: UserPurchaseUpdateWithoutUserInput;
  where: UserPurchaseWhereUniqueInput;
};

export type UserPurchaseWhereInput = {
  AND?: InputMaybe<Array<UserPurchaseWhereInput>>;
  NOT?: InputMaybe<Array<UserPurchaseWhereInput>>;
  OR?: InputMaybe<Array<UserPurchaseWhereInput>>;
  campaignId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  isPaid?: InputMaybe<BoolFilter>;
  merch?: InputMaybe<MerchRelationFilter>;
  merchId?: InputMaybe<IntFilter>;
  qty?: InputMaybe<IntFilter>;
  razorpayOrderId?: InputMaybe<StringNullableFilter>;
  razorpayPaymentId?: InputMaybe<StringNullableFilter>;
  size?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserPurchaseWhereUniqueInput = {
  AND?: InputMaybe<Array<UserPurchaseWhereInput>>;
  NOT?: InputMaybe<Array<UserPurchaseWhereInput>>;
  OR?: InputMaybe<Array<UserPurchaseWhereInput>>;
  campaignId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPaid?: InputMaybe<BoolFilter>;
  merch?: InputMaybe<MerchRelationFilter>;
  merchId?: InputMaybe<IntFilter>;
  qty?: InputMaybe<IntFilter>;
  razorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  razorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Age = 'age',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Dob = 'dob',
  Email = 'email',
  GoogleId = 'googleId',
  Id = 'id',
  IsVerified = 'isVerified',
  MobileNo = 'mobileNo',
  Name = 'name',
  Otp = 'otp',
  Password = 'password',
  Qrtoken = 'qrtoken',
  RegistrationrazorpayOrderId = 'registrationrazorpayOrderId',
  RegistrationrazorpayPaymentId = 'registrationrazorpayPaymentId',
  Role = 'role'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  age?: InputMaybe<IntNullableWithAggregatesFilter>;
  campaignId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dob?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  googleId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isVerified?: InputMaybe<BoolWithAggregatesFilter>;
  mobileNo?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  otp?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  qrtoken?: InputMaybe<StringNullableWithAggregatesFilter>;
  registrationrazorpayOrderId?: InputMaybe<StringNullableWithAggregatesFilter>;
  registrationrazorpayPaymentId?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumroleWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  age?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type UserSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  googleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mobileNo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purchases?: InputMaybe<UserPurchaseUpdateManyWithoutUserNestedInput>;
  qrtoken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationrazorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationrazorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumroleFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  googleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mobileNo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  qrtoken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationrazorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationrazorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumroleFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<UserCreateWithoutPurchasesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutPurchasesInput>;
  upsert?: InputMaybe<UserUpsertWithoutPurchasesInput>;
};

export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
  data: UserUpdateWithoutPurchasesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutPurchasesInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  campaignId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  googleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mobileNo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  qrtoken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationrazorpayOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationrazorpayPaymentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumroleFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPurchasesInput = {
  create: UserCreateWithoutPurchasesInput;
  update: UserUpdateWithoutPurchasesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  age?: InputMaybe<IntNullableFilter>;
  campaignId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  googleId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  mobileNo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  otp?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  purchases?: InputMaybe<UserPurchaseListRelationFilter>;
  qrtoken?: InputMaybe<StringNullableFilter>;
  registrationrazorpayOrderId?: InputMaybe<StringNullableFilter>;
  registrationrazorpayPaymentId?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumroleFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  age?: InputMaybe<IntNullableFilter>;
  campaignId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isVerified?: InputMaybe<BoolFilter>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  otp?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  purchases?: InputMaybe<UserPurchaseListRelationFilter>;
  qrtoken?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayOrderId?: InputMaybe<Scalars['String']['input']>;
  registrationrazorpayPaymentId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<EnumroleFilter>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: number, name: string, email: string, campaignId?: string | null, age?: number | null, dob?: any | null, mobileNo?: string | null } };

export type SignUpUserMutationVariables = Exact<{
  data: SignUpInput;
  verificationToken: Scalars['String']['input'];
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'SignUpOutput', token: string, role: string, user: { __typename?: 'User', id: number, name: string, email: string, campaignId?: string | null, age?: number | null, dob?: any | null, mobileNo?: string | null } } };


export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    id
    name
    email
    campaignId
    age
    dob
    mobileNo
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($data: SignUpInput!, $verificationToken: String!) {
  signUpUser(data: $data, verificationToken: $verificationToken) {
    token
    role
    user {
      id
      name
      email
      campaignId
      age
      dob
      mobileNo
    }
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      verificationToken: // value for 'verificationToken'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;