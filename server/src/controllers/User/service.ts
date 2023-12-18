import { IUser } from "interfaces/user";
import {
  checkUserExist,
  getUserById,
  updateUserVerifyCode,
} from "../../bin/db";
import schemaAuth from "../../controllers/Auth/schema";
import { getUniqueCodev3 } from "../../helper/Common";
import SendEmail from "../../helper/sendEmail";
import useValidation from "../../helper/useValidation";
import ResponseError from "../../modules/Response/ResponseError";

class UserService {
  /**
   *
   * @param id
   * @param paranoid
   */
  public static async getOne(id: string) {
    const data = await getUserById(id);

    if (!data) {
      throw new ResponseError.NotFound(
        "user data not found or has been deleted"
      );
    }

    return data;
  }
  /**
   *
   * @param email
   */

  public static async validateUserEmail(email: string) {
    const data = await checkUserExist(email);
    if (data.length) {
      return data[0] as IUser;
    }
    return null;
  }
  /**
   *
   * @param formdata
   */
  public static async sendFrogetPasswordToken(email: string) {
    // eslint-disable-next-line object-shorthand
    useValidation(schemaAuth.checkEmail, { email: email });
    const currentUser = await UserService.validateUserEmail(email);
    if (!currentUser) return { status: 1, message: "email is not valid !" };

    // if (!currentUser.emailConfirmed)
    //   return {
    //     status: 2,
    //     message: "this email address is not confirmed yet !",
    //   };
    // if (currentUser.signupStatus !== 2)
    //   return { status: 3, message: "signup process is not complete yet !" };
    // if (!currentUser.isActive)
    // return { status: 4, message: "this account is not active !" };
    const newCode = getUniqueCodev3();
    await updateUserVerifyCode(currentUser.email, newCode);
    // send forgot pass token code
    SendEmail.forgetPassToken(currentUser, newCode);
    return { status: 2, message: "code has been send successfully !" };
  }
}

export default UserService;
