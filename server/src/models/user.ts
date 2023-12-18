import { Model, Optional, DataTypes } from "sequelize";
import db from "./_instance";

export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
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
  associate?: any;
  verify_code?:string;
  //
  language_Id?: number;
  country_Id?: number;
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  comparePassword(): boolean | void;
}
