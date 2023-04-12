import * as Yup from "yup";

export const newPostSchema = Yup.object({
    description: Yup.string("Type err").required("Field required"),

});