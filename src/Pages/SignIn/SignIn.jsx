import { Formik } from "formik";
import Section from "../../components/Section/Section";
import * as Yup from "yup";
import {
    Button,
    ErrorMessage,
    Field,
    Form,
    FormRow,
    Option,
    Select,
} from "../../utils/styles/generalStyles";

const SignIn = () => {
    return (
        <Section title="Sign in">
            <Formik
                initialValues={{

                    email: "",
                    password: "",

                }}
                validationSchema={Yup.object({

                    email: Yup.string()
                        .email("Email is not valid!")
                        .required("Email is required!"),
                    password: Yup.string()
                        .min(8, "Password must be at least 8 characters long")
                        .required("Password is required!"),

                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    // alert(JSON.stringify(values, null, 2));
                    setTimeout(() => {
                        const data = {

                            email: values.email,
                            password: values.password,


                        };

                        alert(JSON.stringify(data, null, 2));
                        setSubmitting(false); // da je zavrsilo
                        resetForm();
                    }, 1000);
                }}
            >
                {(formik) => (
                    // tu sad slazemo svoju formu

                    <Form>




                        <FormRow>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email..."
                                disabled={formik.isSubmitting}
                            />
                            <ErrorMessage
                                name="email"
                                component={"div"} // component div je da se preuzme i css error teksta
                            />
                        </FormRow>

                        <FormRow>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password..."
                                disabled={formik.isSubmitting}
                            />
                            <ErrorMessage
                                name="password"
                                component={"div"} // component div je da se preuzme i css error teksta
                            />
                        </FormRow>





                        <FormRow>
                            <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? "Processing..." : "SignIn"}
                            </Button>
                        </FormRow>
                    </Form>
                )}
            </Formik>
        </Section>
    );
};

export default SignIn;