import schema from "controllers/User/schema";
import useValidation from "helper/useValidation";
import { ISessionAttributes } from "interfaces/session";
import Session from "../../interfaces/session";

class SessionService {
  /**
   *
   * @param formData
   */
  public static async create(formData: ISessionAttributes) {
    const value = useValidation(schema.create, formData);
    // const data = await Session.create(value);

    // return data;
  }
}
export default SessionService
