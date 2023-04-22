import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import { newPost } from "../../services/PostService";
import { newPostSchema } from "../../utils/schemas/post.schema";

const initialValues = {
  body: "",
  image: "",
};

export const NewPost = ({ refreshPosts }) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    setSubmitting,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: newPostSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key === "image") {
          [...values["image"]].forEach((img, i) => {
            formData.append(`img-${i}`, img);
          });
        } else {
          formData.append(key, values[key]);
        }
      });
      newPost(formData)
        .then((response) => {
          refreshPosts && refreshPosts();
          setSubmitting(true);
        })
        .catch((err) => {
          console.err(err);
          setSubmitting(false);
        });
      resetForm({ values: "" });
    },
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-3"
        encType="multipart/form-data"
      >
        <FormControl
          text="Make a New Post!"
          error={touched.body && errors.body}
          htmlFor="body"
        >
          <Input
            id="body"
            name="body"
            type="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}
            error={touched.body && errors.body}
          />
        </FormControl>

        <FormControl text="Upload image" htmlFor="image">
          <input
            id="image"
            name="image"
            type="file"
            multiple
            onChange={(event) => {
              setFieldValue("image", event.currentTarget.files);
            }}
          />
        </FormControl>

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            className="btn rounded-pill"
            style={{
              backgroundColor: "#3EC4FC",
              color: "white",
              width: "80vw",
            }}
          >
            ADD NEW
          </button>
        </div>
      </form>
    </div>
  );
};
