export interface ILoginAttributes {
  email: string;
  password: string;
}

export interface IUserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  phoneNumber: string;
  isActive?: boolean | null;
  tokenVerify?: string | null;
  password?: string;
  confirmNewPassword?: string;
  registerDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  //
  language_Id?: number;
  country_Id?: number;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  nickName: string;
  email: string;
  password?: string;
  phoneNumber: string;
  isActive?: boolean | null;
  tokenVerify?: string | null;
  newPassword?: string;
  confirmNewPassword?: string;
  registerDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  language_Id?: number;
  country_Id?: number;
  city_Id?: number;
  verify_code: string;
  emailConfirmed: boolean;
  signupStatus: number;
  hasPic: boolean;
  autoLogin: boolean;
  allow_change_pass: boolean;
  personality_Id: number;
}


export interface CreateUser {
  id: string
  email: string
  newPassword: string
  confirmNewPassword: string
  language_Id?: number
  tokenVerify?: string | null
  verify_code: string
}

export interface ConfirmForgetPass {
  email: string
  verify_code: string
}