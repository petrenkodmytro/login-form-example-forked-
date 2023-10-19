import * as Yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
