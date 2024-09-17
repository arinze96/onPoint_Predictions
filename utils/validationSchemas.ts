import * as Yup from "yup";

export const editProfileValidationSchemas  = Yup.object({
    firstname: Yup.string().trim(),
    lastname: Yup.string().trim(),
    phone: Yup.string().trim(),
    image: Yup.string().trim(),
    dob: Yup.string().trim(),
    country: Yup.string().trim(),
    countryCode: Yup.string().trim(),
    state: Yup.string().trim(),
    city: Yup.string().trim(),
    address1: Yup.string().trim(),
    zip: Yup.string().trim(),
    region: Yup.string().trim(),
  });

  // .min(8, "Password is too short!")
  export const registerValidationSchema = Yup.object({
    fullname: Yup.string().trim().required("required!"),
    email: Yup.string().email("invalid email").trim().required("required!"),
    referral: Yup.string().trim().notRequired(),
    password: Yup.string()
      .trim()
      .required("password is required!"),
    password_confirmation: Yup.string().equals(
      [Yup.ref("password"), null],
      "password does not match"
    ),
  });