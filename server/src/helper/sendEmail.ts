import EmailProvider from "../config/email";
import { CreateUser, IUser } from "../interfaces/user";
import path from "path";
const { APP_NAME } = process.env;
import { readHTMLFile } from "../helper/file";
import ResponseError from "../modules/Response/ResponseError";
import handlebars from "handlebars";

class SendEmail {
  public static AccountRegister(formData: CreateUser) {
    const { email } = formData;
    const TOKEN = formData.verify_code;
    const pathTemplate = path.resolve(
      __dirname,
      `../../public/templates/emails/emailverify.html`
    );

    const subject = "MindUp Registeration";
    // const urlToken = `${BASE_URL_CLIENT}/email/verify?token=${token}`
    const dataTemplate = { APP_NAME, TOKEN };
    const Email = new EmailProvider();

    readHTMLFile(pathTemplate, (error: Error, html: any) => {
      if (error) {
        throw new ResponseError.NotFound("email template not found");
      }

      const template = handlebars.compile(html);
      const htmlToSend = template(dataTemplate);

      Email.send(email, subject, htmlToSend);
    });
  }

  public static forgetPassToken(formData: IUser, token: string) {
    const { email } = formData;
    const TOKEN = token;
    const pathTemplate = path.resolve(
      __dirname,
      `../../public/templates/emails/register.html`
    );

    const subject = "Alishopeee Registeration";
    // const urlToken = `${BASE_URL_CLIENT}/email/verify?token=${token}`
    const dataTemplate = { APP_NAME, TOKEN };
    const Email = new EmailProvider();

    readHTMLFile(pathTemplate, (error: Error, html: any) => {
      if (error) {
        throw new ResponseError.NotFound("email template not found");
      }

      const template = handlebars.compile(html);
      const htmlToSend = template(dataTemplate);
      Email.send(email, subject, htmlToSend);
      
    });
  }
}

export default SendEmail;
