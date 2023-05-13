import { Formik } from "formik";
import Section from "../../components/Section/Section";
import * as Yup from "yup";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import { getUsers, loginUser } from "../../api/users";
import { useState } from "react";

const SignIn = ({ setIsLoggedIn, setIsAdmin, isLogedIn, isAdmin }) => {
  const [successMessage, setSuccessMessage] = useState(null);

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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await loginUser(values);

            const users = await getUsers(response.access_token);

            const user = users.data.find((user) => user.email == values.email);
            setSuccessMessage({
              error: false,
              message:
                "User " +
                user.first_name +
                " " +
                user.last_name +
                " is loged in successfully",
            });
            setTimeout(() => {
              setSuccessMessage(null);
            }, 2000);

            localStorage.setItem("jwt_token", response.access_token);

            console.log("Je li admin" + JSON.stringify(user.is_admin));
            localStorage.setItem("is_admin", user.is_admin);

            setIsAdmin(user.is_admin);
            setIsLoggedIn(response.access_token);
            console.log("Je li logiran" + isLogedIn);

            resetForm();
          } catch (err) {
            setSuccessMessage({
              error: true,
              message: "User is not loged in successfully",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          // tu sad slazemo svoju formu

          <Form>
            {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}

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
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
