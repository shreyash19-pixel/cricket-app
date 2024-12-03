import React, { useState } from 'react'
import { SignupBtn, SignupContainer, SignupHeading, SignupInput, SignupInputError, SignupInputFieldWrap, SignupInputLabel, SignupLink, SignupOptionsInput, SignupSelectInput, SignupWrap, SigunpForm } from '../../styles/Signup'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import usePost from '../../hooks/usePost';

const ForgotPassword = () => {

    const { postData } = usePost('');


    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const [passwordVisibility, setPasswordVisibility] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const toggleVisibility = (field) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const renderPasswordField = (label, fieldName) => (
        <SignupInputFieldWrap>
            <SignupInputLabel>{label}</SignupInputLabel>
            <input
                type={passwordVisibility[fieldName] ? "text" : "password"}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
            />
            {!passwordVisibility[fieldName] ? (
                <FaRegEye
                    style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}
                    onClick={() => toggleVisibility(fieldName)}
                />
            ) : (
                <FaRegEyeSlash
                    style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}
                    onClick={() => toggleVisibility(fieldName)}
                />
            )}
            {errors[fieldName] && <SignupInputError>{errors[fieldName]}</SignupInputError>}
        </SignupInputFieldWrap>
    );

    const [errors, setErrors] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };


    const handleForm = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.oldPassword.trim() === "") {
            newErrors.oldPassword = "Please enter a valid password.";
        }
        if (formData.newPassword.trim() === "") {
            newErrors.newPassword = "Please enter a new password.";
        }

        if (formData.confirmPassword.trim() === "") {
            newErrors.confirmPassword = "Please enter confirm password.";
        }
        else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords did not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            postData(formData)
        }
    };



    return (
        <SignupContainer login={true}>
            <SigunpForm onSubmit={handleForm}>
                <SignupHeading>
                    Forgot Password
                </SignupHeading>

                {renderPasswordField("Old Password", "oldPassword")}
                {renderPasswordField("New Password", "newPassword")}
                {renderPasswordField("Confirm Password", "confirmPassword")}


                <SignupBtn type="submit">
                    Change Password
                </SignupBtn>
            </SigunpForm>
        </SignupContainer>
    )
}

export default ForgotPassword
