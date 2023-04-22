import React, { useContext } from "react";
import Input from "../../Input/Input";
import FormControl from "../../FormControl/FormControl";
import { getEditCurrentUser as editService } from "../../../services/UserService"
import { useNavigate, Link } from "react-router-dom";
import "./EditProfile.css"
import { useFormik } from "formik";
import AuthContext from "../../../context/AuthContext";
import { editSchema } from "../../../utils/schemas/edit.schema";



export const EditProfile = () => {
    const { currentUser, getCurrentUser } = useContext(AuthContext);


    const initialValues = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        dayOfBirth: currentUser.dayOfBirth,
        monthOfBirth: currentUser.monthOfBirth,
        yearOfBirth: currentUser.yearOfBirth,
        timeOfBirth: currentUser.timeOfBirth,
    };

    const navigate = useNavigate()

    const {
        values, errors, touched, handleChange, handleBlur,
        isSubmitting, handleSubmit, setSubmitting, setFieldError
    } = useFormik({
        initialValues: initialValues,
        validateOnBlur: true,
        validateOnChange: false,
        validationSchema: editSchema,
        onSubmit: (values) => {
            editService({ firstName: values.firstName, lastName: values.lastName, dayOfBirth: values.dayOfBirth, monthOfBirth: values.monthOfBirth, yearOfBirth: values.yearOfBirth, timeOfBirth: values.timeOfBirth })
                .then((response) => {
                    getCurrentUser()
                    navigate("/profile")
                })
                .catch((error) => {

                    console.log(error.response);
                    setSubmitting(false)
                })
        },

    })

    console.log(values)

    return (
        <div className="bodyBackground min-vh-100">

            <h1> Edit Your Profile! </h1>

            <form onSubmit={handleSubmit} >
                <FormControl
                    text="First Name"
                    error={touched.firtsName && errors.firstName}
                    htmlFor="firstName"
                >
                    <Input
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        error={touched.firstName && errors.firstName}
                        placeholder={initialValues.firstName}

                    />
                </FormControl>

                <FormControl
                    text="Last Name"
                    error={touched.lastName && errors.lastName}
                    htmlFor="lastName"
                >
                    <Input
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        error={touched.lastName && errors.lastName}
                        placeholder={initialValues.lastName}

                    />

                </FormControl>


                <FormControl
                    text="Day of Birth"
                    error={touched.dayOfBirth && errors.dayOfBirth}
                    htmlFor="dayOfBirth"
                >
                    <Input
                        id="dayOfBirth"
                        name="dayOfBirth"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dayOfBirth}
                        error={touched.dayOfBirth && errors.dayOfBirth}
                        placeholder={initialValues.dayOfBirth}
                        type="number"

                    />

                </FormControl>
                <FormControl
                    text="Month of Birth"
                    error={touched.monthOfBirth && errors.monthOfBirth}
                    htmlFor="monthOfBirth"
                >
                    <Input
                        id="monthOfBirth"
                        name="monthOfBirth"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.monthOfBirth}
                        error={touched.monthOfBirth && errors.monthOfBirth}
                        placeholder={initialValues.monthOfBirth}
                        type="number"

                    />

                </FormControl>
                <FormControl
                    text="Year of Birth"
                    error={touched.yearOfBirth && errors.yearOfBirth}
                    htmlFor="yearOfBirth"
                >
                    <Input
                        id="yearOfBirth"
                        name="yearOfBirth"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.yearOfBirth}
                        error={touched.yearOfBirth && errors.yearOfBirth}
                        placeholder={initialValues.yearOfBirth}
                        type="number"

                    />

                </FormControl>

                <FormControl
                    text="Time of Birth"
                    error={touched.dayOfBirth && errors.dayOfBirth}
                    htmlFor="timeOfBirth"
                >
                    <Input
                        id="timeOfBirth"
                        name="timeOfBirth"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.timeOfBirth}
                        error={touched.timeOfBirth && errors.timeOfBirth}
                        placeholder={initialValues.timeOfBirth}
                        type="time"

                    />
                </FormControl>
                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Save Changes"}

                </button>

            </form>
        </div>
    )
}