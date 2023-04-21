import * as Yup from "yup";

export const commentSchema = Yup.object({
  body: Yup.string("Message err").required("Required"),
});
