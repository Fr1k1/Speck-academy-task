import { ResetDescription, ResetTitle, ResetWrapper } from "./ResetPasswordStyles";
import { Formik } from "formik";
import * as Yup from "yup";


import PropTypes from "prop-types";

const ResetPassword = ({ children }) => {
    return (
        <ResetWrapper>
            <ResetTitle>Reset Password</ResetTitle>
            <ResetDescription>{children}</ResetDescription>


        </ResetWrapper>
    )
}

ResetPassword.propTypes = {

    children: PropTypes.node,
}

export default ResetPassword