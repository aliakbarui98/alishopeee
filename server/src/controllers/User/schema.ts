import * as yup from "yup";

const create = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  phoneNumber: yup.string().nullable(),
  active: yup.boolean().nullable(),
  tokenVerify: yup.string().nullable(),
  password: yup
    .string()
    .min(8, "at least 8 characters")
    .oneOf([yup.ref("confirmNewPassword")], "passwords are not the same"),
  confirmPassword: yup
    .string()
    .min(8, "at least 8 characters")
    .oneOf([yup.ref("password")], "password are not the same"),
});

const createPassword = yup.object().shape({
  password: yup
    .string()
    .min(8, "at least 8 characters")
    .oneOf([yup.ref("confirmNewPassword")], "passwords are not the same"),
  confirmNewPassword: yup
    .string()
    .min(8, "at least 8 characters")
    .oneOf([yup.ref("password")], "passwords are not the same"),
});
const createAS = yup.object().shape({
  email: yup.string().required("email is required"),
});

export default { create, createPassword, createAS }

