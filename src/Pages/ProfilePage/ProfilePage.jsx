import { Formik } from "formik";
import Section from "../../Components/Section/Section";
import * as Yup from "yup";
import {
    ErrorMessage,
    Field,
    Form,
    FormRow,
    Option,
    Select,
} from "../../utils/styles/generalStyles";

import { Button } from "../ProfilePage/ProfilePageStyles";
import { useState } from "react";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
//import "./ProfilePage.scss";

const ProfilePage = () => {

    const [formValues, setFormValues] = useState({
        firstName: "Martin",
        lastName: "Friščić",
        email: "martin.friscic6@gmail.com",
        githubUsername: "Fr1k1",
        zaplinUsername: "/",
        activeFacultyYear: "3",
        isAdmin: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const [disabled, setDisabled] = useState(true);
    return (
        <Section title={"Profile"}>

            <Button onClick={() => setDisabled(!disabled)}>{disabled ? "Edit" : "Cancel"}</Button>



            <div className="forms_div">

                <div className="formWrapper">

                    <div className="prvaForma">
                        <Formik
                            enableReinitialize={true}
                            initialValues={{
                                firstName: formValues.firstName,
                                lastName: formValues.lastName,
                                email: formValues.email,
                                githubUsername: formValues.githubUsername,
                                zaplinUsername: formValues.zaplinUsername,
                                activeFacultyYear: formValues.activeFacultyYear,
                                isAdmin: false,
                            }}
                            validationSchema={Yup.object({
                                firstName: Yup.string().required("First name is required!"),
                                lastName: Yup.string().required("Last name is required!"),
                                email: Yup.string()
                                    .email("Email is not valid!")
                                    .required("Email is required!"),

                                githubUsername: Yup.string().required("Github username is required!"),
                                zaplinUsername: Yup.string().required("Zaplin username is required!"),
                                activeFacultyYear: Yup.string().required(
                                    "Active faculty year is required!"
                                ),
                                isAdmin: false,
                            })}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                // alert(JSON.stringify(values, null, 2));
                                setTimeout(() => {
                                    const data = {
                                        first_name: values.firstName,
                                        last_name: values.lastName,
                                        email: values.email,
                                        password: values.password,
                                        zaplin_username: values.zaplinUsername,
                                        github_username: values.githubUsername,
                                        active_faculty_year:
                                            parseInt(values.activeFacultyYear) === 0
                                                ? null
                                                : parseInt(values.activeFacultyYear),
                                        is_admin: false,
                                    };

                                    alert(JSON.stringify(data, null, 2));
                                    setSubmitting(false); // da je zavrsilo
                                    resetForm();
                                }, 1000);

                                console.log(values);

                            }}
                        >
                            {(formik) => (
                                // tu sad slazemo svoju formu

                                <Form>
                                    <FormRow>
                                        <label htmlFor="firstName">{disabled ? null : 'First Name'}</label>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            placeholder="First name..."
                                            disabled={disabled}
                                            value={formValues.firstName}
                                            onChange={handleInputChange}

                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component={"div"} // component div je da se preuzme i css error teksta
                                        />
                                    </FormRow>

                                    <FormRow>
                                        <label htmlFor="lastName">{disabled ? null : 'Last Name'}</label>

                                        <Field
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name..."
                                            disabled={disabled}
                                            value={formValues.lastName}
                                            onChange={handleInputChange}

                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component={"div"} // component div je da se preuzme i css error teksta
                                        />
                                    </FormRow>

                                    <FormRow>

                                        <label htmlFor="email">{disabled ? null : 'Email'}</label>

                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email..."
                                            disabled={disabled}
                                            value={formValues.email}
                                            onChange={handleInputChange}

                                        />
                                        <ErrorMessage
                                            name="email"
                                            component={"div"} // component div je da se preuzme i css error teksta
                                        />
                                    </FormRow>

                                    <FormRow>

                                        <label htmlFor="githubUsername">{disabled ? null : 'Github username'}</label>

                                        <Field
                                            type="text"
                                            name="githubUsername"
                                            placeholder="Github username..."
                                            disabled={disabled}
                                            value={formValues.githubUsername}
                                            onChange={handleInputChange}

                                        />
                                        <ErrorMessage
                                            name="githubUsername"
                                            component={"div"} // component div je da se preuzme i css error teksta
                                        />
                                    </FormRow>

                                    <FormRow>

                                        <label htmlFor="zaplinUsername">{disabled ? null : 'Zeplin username'}</label>

                                        <Field
                                            type="text"
                                            name="zaplinUsername"
                                            placeholder="Zaplin username..."
                                            disabled={disabled}

                                            value={formValues.zaplinUsername}
                                            onChange={handleInputChange}

                                        />
                                        <ErrorMessage
                                            name="zaplinUsername"
                                            component={"div"} // component div je da se preuzme i css error teksta
                                        />
                                    </FormRow>

                                    <FormRow>

                                        <label htmlFor="activeFacultyYear">{disabled ? null : 'Active faculty year'}</label>

                                        <Select
                                            id="activeFacultyYear"
                                            disabled={formik.isSubmitting}
                                            {...formik.getFieldProps("activeFacultyYear")}

                                            value={formValues.activeFacultyYear}
                                            onChange={handleInputChange}
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
                                            {formik.isSubmitting ? "Processing..." : "Update user data"}
                                        </Button>
                                    </FormRow>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="drugaForma">
                        <ResetPassword >
                            {disabled ? "In order to reset press the button" :
                                <Formik
                                    initialValues={{

                                        oldPassword: "",
                                        newPassword: "",
                                        newPasswordRepeat: "",


                                    }}
                                    validationSchema={Yup.object({
                                        oldPassword: Yup.string(),
                                        newPassword: Yup.string()
                                            .min(8, "Password must be at least 8 characters long")
                                            .required("Password is required!"),
                                        newPasswordRepeat: Yup.string().oneOf(
                                            [Yup.ref("newPassword"), null],
                                            "Passwords must match"
                                        ),
                                    })}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        console.log(values);
                                        // alert(JSON.stringify(values, null, 2));
                                        setTimeout(() => {
                                            const data = {
                                                oldPassword: values.oldPassword,
                                                newPassword: values.newPassword,
                                                newPasswordRepeat: values.newPasswordRepeat,
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
                                                    type="password"
                                                    name="oldPassword"
                                                    placeholder="Password..."
                                                    disabled={formik.isSubmitting}
                                                />
                                                <ErrorMessage
                                                    name="oldPassword"
                                                    component={"div"} // component div je da se preuzme i css error teksta
                                                />
                                            </FormRow>

                                            <FormRow>
                                                <Field
                                                    type="password"
                                                    name="newPassword"
                                                    placeholder="New password..."
                                                    disabled={formik.isSubmitting}
                                                />
                                                <ErrorMessage
                                                    name="newPassword"
                                                    component={"div"} // component div je da se preuzme i css error teksta
                                                />
                                            </FormRow>

                                            <FormRow>
                                                <Field
                                                    type="password"
                                                    name="repeatNewPassword"
                                                    placeholder="Repeat new password..."
                                                    disabled={formik.isSubmitting}
                                                />
                                                <ErrorMessage
                                                    name="repeatNewPassword"
                                                    component={"div"} // component div je da se preuzme i css error teksta
                                                />
                                            </FormRow>



                                            <FormRow>
                                                <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                                                    {formik.isSubmitting ? "Processing..." : "Update password"}
                                                </Button>
                                            </FormRow>
                                        </Form>
                                    )}
                                </Formik>
                            }
                        </ResetPassword>
                    </div>


                </div>

            </div>
        </Section>
    );
};

export default ProfilePage;