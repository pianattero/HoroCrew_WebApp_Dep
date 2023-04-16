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

export const NewPost = () => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: newPostSchema,
    onSubmit: (values) => {
      newPost({
        body: values.body,
        image: values.image,
      })
        .then((response) => {
          console.info(response);
          console.log(values.image);
          navigate("/socialFeed");
        })
        .catch((err) => {
          console.err(err);
          setSubmitting(false);
        });
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
          <Input
            id="image"
            name="image"
            type="file"
            onChange={handleChange}
            value={values.image}
          />
        </FormControl>

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            className="btn rounded-pill"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#3EC4FC",
              color: "white",
              width: "80vw",
            }}
          >
            {isSubmitting ? "ADDING NEW POST" : "ADD NEW"}
          </button>
        </div>
      </form>
    </div>
  );
};
