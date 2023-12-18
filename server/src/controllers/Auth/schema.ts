import * as yup from "yup";

const register = yup
  .object()
  .shape({
    firstName: yup.string().required("firstName is required"),
    lastName: yup.string().required("lastName is required"),
    email: yup.string().email("invalid email").required("email is required"),
    // phoneNumber: yup.string().nullable(),
    // isActive: yup.boolean().nullable(),
    // tokenVerify: yup.string().nullable(),
    verify_code: yup.string().nullable(),
    // language_Id: yup.number().required('language is not selected'),
    password: yup
      .string()
      .min(8, "at least 8 characters")
      .oneOf([yup.ref("confirmNewPassword")], "passwords are not the same"),
    confirmNewPassword: yup
      .string()
      .min(8, "at least 8 characters")
      .oneOf([yup.ref("password")], "passwords are not the same"),
  })
  .required();

// forgetPassword
const checkEmail = yup
  .object()
  .shape({
    email: yup.string().required("email is required"),
  })
  .required();
const confirmEmailCode = yup.object().shape({
  email: yup.string().required("email is required"),
  verify_code: yup
    .string()
    .required("verify code is required")
    .min(4, "verify code should be 4 chr")
    .max(4, "verify code should be 4 chr"),
});

const login = yup
  .object()
  .shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
  })
  .required();

export default { register, login, checkEmail, confirmEmailCode };
