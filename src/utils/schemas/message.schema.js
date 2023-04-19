import * as Yup from "yup";

export const msgSchema = Yup.object({
  msg: Yup.string("Message err").required("Required"),
});
