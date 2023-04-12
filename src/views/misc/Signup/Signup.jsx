import { useFormik } from "formik";
import FormControl from "../../../components/FormControl/FormControl";
import Input from "../../../components/Input/Input";
import { signUp as signUpService } from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../../utils/schemas/signUp.schema";
import { Link } from "react-router-dom";


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    timeOfBirth: "",
};

const FormSignUp = () => {
    const navigate = useNavigate()

    const {
        values, errors, touched, handleChange, handleBlur,
        isSubmitting, handleSubmit, setSubmitting, setFieldError
    } = useFormik({
        initialValues: initialValues,
        validateOnBlur: true,
        validateOnChange: false,
        validationSchema: signUpSchema,
        onSubmit: (values) => signUpService({ firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password, repeatPassword: values.repeatPassword, dayOfBirth: values.dayOfBirth, monthOfBirth: values.monthOfBirth, yearOfBirth: values.yearOfBirth, timeOfBirth: values.monthOfBirth })

            .then((response) => {
                console.log(response)
                navigate("/login")
            })
            .catch((error) => {

                console.log(error);
                setSubmitting(false)
            })

    });

    return (
        <div>
            <h1> Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <FormControl
                    text="firstName"
                    error={touched.firstName && errors.firstName}
                    htmlFor="firstName"
                >
                    <Input
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        error={touched.firstName && errors.firstName}
                    />
                </FormControl>

                <FormControl
                    text="lastName"
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
                    />
                </FormControl>

                <FormControl
                    text="email"
                    error={touched.lastName && errors.lastName}
                    htmlFor="email"
                >
                    <Input
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={touched.email && errors.email}
                    />
                </FormControl>

                <FormControl
                    text="password"
                    error={touched.password && errors.password}
                    htmlFor="password"
                >
                    <Input
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={touched.password && errors.password}
                        placeholder="Enter your password..."
                        type="password"
                    />
                </FormControl>

                <FormControl
                    text="repeatPassword"
                    error={touched.repeatPassword && errors.repeatPassword}
                    htmlFor="repeatPassword"
                >
                    <Input
                        id="repeatPassword"
                        name="repeatPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.repeatPassword}
                        error={touched.repeatPassword && errors.repeatPassword}
                        placeholder="Repeat your password..."
                        type="password"
                    />
                </FormControl>

                <FormControl
                    text="dayOfBirth"
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
                        placeholder="DD"
                    />
                </FormControl>

                <FormControl
                    text="monthOfBirth"
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
                        placeholder="MM"
                    />
                </FormControl>

                <FormControl
                    text="yearOfBirth"
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
                        placeholder="YYYY"
                    />
                </FormControl>

                <FormControl
                    text="timeOfBirth"
                    error={touched.timeOfBirth && errors.timeOfBirth}
                    htmlFor="timeOfBirth"
                >
                    <Input
                        id="timeOfBirth"
                        name="timeOfBirth"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.timeOfBirth}
                        error={touched.timeOfBirth && errors.timeOfBirth}
                        placeholder="00:00"
                        type="time"
                    />
                </FormControl>

                <button className="btn btn-dark m-3" type="submit">
                    Register
                </button>

                <button className="btn btn-primary m-3" type="reset">
                    Reset
                </button>
                <Link className="btn btn-light m-3" to="/"> Atras </Link>


            </form>

        </div>
    )
}

export default FormSignUp

