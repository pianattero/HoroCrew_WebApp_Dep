import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import { newPost } from "../../services/PostService";
import { newPostSchema } from "../../utils/schemas/post.schema";

const initialValues = {
    description: "",
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
                description: values.description,
            })
                .then((response) => {
                    console.info(response);
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

            <form onSubmit={handleSubmit} className="mx-3">

                <FormControl
                    text="Make a New Post! "
                    error={touched.description && errors.description}
                    htmlFor="description"
                >
                    <Input
                        id="description"
                        name="description"
                        type="textarea"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        error={touched.description && errors.description}
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

