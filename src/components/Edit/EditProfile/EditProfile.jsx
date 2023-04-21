import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import Input from "../../Input/Input";

export const EditProfile = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            timeOfBirth: "",
            dayOfBirth: "",
            monthOfBirth: "",
            yearOfBirth: "",
            file: null,
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("email", values.email);
            formData.append("timeOfBirth", values.timeOfBirth);
            formData.append("dayOfBirth", values.dayOfBirth);
            formData.append("monthOfBirth", values.monthOfBirth);
            formData.append("yearOfBirth", values.yearOfBirth);
            if (values.file) {
                formData.append("file", values.file);
            }

            axios
                .put("/profile/edit-profile", formData)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <Input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />

            <label htmlFor="timeOfBirth">Time of Birth</label>
            <Input
                type="text"
                id="timeOfBirth"
                name="timeOfBirth"
                value={formik.values.timeOfBirth}
                onChange={formik.handleChange}
            />

            <label htmlFor="dayOfBirth">Day of Birth</label>
            <Input
                type="text"
                id="dayOfBirth"
                name="dayOfBirth"
                value={formik.values.dayOfBirth}
                onChange={formik.handleChange}
            />

            <label htmlFor="monthOfBirth">Month of Birth</label>
            <Input
                type="text"
                id="monthOfBirth"
                name="monthOfBirth"
                value={formik.values.monthOfBirth}
                onChange={formik.handleChange}
            />

            <label htmlFor="yearOfBirth">Year of Birth</label>
            <Input
                type="text"
                id="yearOfBirth"
                name="yearOfBirth"
                value={formik.values.yearOfBirth}
                onChange={formik.handleChange}
            />


            <button type="submit">Save Changes</button>
        </form>
    );
};