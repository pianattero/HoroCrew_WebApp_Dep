import * as Yup from "yup";

export const newPostSchema = Yup.object({
  body: Yup.string("Type err").required("Field required"),
  image: Yup.string("Type err"),
});
