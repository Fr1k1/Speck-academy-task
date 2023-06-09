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
  Option,
  Select,
} from "../../utils/styles/generalStyles";
import { useState } from "react";

import { registerUser } from "../../api/users";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <Section title="Register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordRepeat: "",
          githubUsername: "",
          zeplinUsername: "",
          activeFacultyYear: "",
          isAdmin: true,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required!"),
          lastName: Yup.string().required("Last name is required!"),
          email: Yup.string()
            .email("Email is not valid!")
            .required("Email is required!"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required!"),
          passwordRepeat: Yup.string().test(
            "passwords-match", // ovo nam nis ne znaci, to tak mora bit
            "Passwords must match!",
            function (value) {
              return this.parent.password === value;
            }
          ),
          githubUsername: Yup.string().required("Github username is required!"),
          zeplinUsername: Yup.string().required("Zaplin username is required!"),
          activeFacultyYear: Yup.string().required(
            "Active faculty year is required!"
          ),
          isAdmin: false,
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);

          const data = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
            zeplin_username: values.zeplinUsername,
            github_username: values.githubUsername,
            active_faculty_year:
              parseInt(values.activeFacultyYear) === 0
                ? null
                : parseInt(values.activeFacultyYear),
            is_admin: false,
          };

          registerUser(data)
            .then((res) => {
              //console.log(res);
              resetForm();

              setSuccessMessage({
                error: false,
                message: "User is registered successfully",
              });
              setTimeout(() => {
                setSuccessMessage(null);
              }, 2000);
            })
            .catch((res) => {
              console.log(res);
              setSuccessMessage({
                error: true,
                message: "There was an error...F",
              });
            })
            .finally(() => {
              setSubmitting(false);
            });
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
                type="text"
                name="firstName"
                placeholder="First name..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                name="firstName"
                component={"div"} // component div je da se preuzme i css error teksta
              />
            </FormRow>

            <FormRow>
              <Field
                type="text"
                name="lastName"
                placeholder="Last name..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                name="lastName"
                component={"div"} // component div je da se preuzme i css error teksta
              />
            </FormRow>

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
              <Field
                type="password"
                name="passwordRepeat"
                placeholder="Repeat password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                name="passwordRepeat"
                component={"div"} // component div je da se preuzme i css error teksta
              />
            </FormRow>

            <FormRow>
              <Field
                type="text"
                name="githubUsername"
                placeholder="Github username..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                name="githubUsername"
                component={"div"} // component div je da se preuzme i css error teksta
              />
            </FormRow>

            <FormRow>
              <Field
                type="text"
                name="zeplinUsername"
                placeholder="Zaplin username..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                name="zeplinUsername"
                component={"div"} // component div je da se preuzme i css error teksta
              />
            </FormRow>

            <FormRow>
              <Select
                id="activeFacultyYear"
                disabled={formik.isSubmitting}
                {...formik.getFieldProps("activeFacultyYear")}
              >
                <Option value="" disabled hidden>
                  Choose an Active faculty year
                </Option>
                <Option value="0">Not a student</Option>
                <Option value="1">1st faculty year</Option>
                <Option value="2">2nd faculty year</Option>
                <Option value="3">3rd faculty year</Option>
                <Option value="4">4th faculty year</Option>
                <Option value="5">5th faculty year</Option>
              </Select>
              <ErrorMessage
                name="activeFacultyYear"
                component={"div"} // component div je da se preuzme i css error teksta
              />
            </FormRow>
            <FormRow>
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Register"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Register;
