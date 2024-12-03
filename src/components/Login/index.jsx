import React, { useState } from 'react'
import { SignupBtn, SignupContainer, SignupHeading, SignupInput, SignupInputError, SignupInputFieldWrap, SignupInputLabel, SignupLink, SignupOptionsInput, SignupSelectInput, SignupWrap, SigunpForm } from '../../styles/Signup'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import usePost from '../../hooks/usePost';

const Login = () => {

    const { postData } = usePost('');


    const [formData, setFormData] = useState({
        tel: "",
        password: "",
    })

    const [isPassVisible, setIsPassVisible] = useState(false)

    const [errors, setErrors] = useState({
        tel: "",
        password: "",
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

        var mobileRegex = /^[0-9]*$/;

        const newErrors = {};

        if (formData.tel.trim() === "" || !mobileRegex.test(formData.tel)) {
            newErrors.tel = "Please enter a valid mobile number.";
        }
        else if (formData.tel.length < 10) {
            newErrors.tel = "Length of mobile number should be 10";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "Please enter a valid password.";
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
                    Login
                </SignupHeading>
                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Mobile Number
                    </SignupInputLabel>
                    <input type="text" maxLength={10} name="tel" value={formData.mobile} onChange={handleChange} />
                    {errors.tel && <SignupInputError>{errors.tel}</SignupInputError>}
                </SignupInputFieldWrap>

                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Password
                    </SignupInputLabel>
                    <input type={isPassVisible ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
                    {!isPassVisible && (<FaRegEye style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }} onClick={() => setIsPassVisible(!isPassVisible)} />)}
                    {isPassVisible && (<FaRegEyeSlash style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }} onClick={() => setIsPassVisible(!isPassVisible)} />)}
                    {errors.password && <SignupInputError>{errors.password}</SignupInputError>}
                    <SignupLink to="/forgot-password">
                        Forgot Password?
                    </SignupLink>

                </SignupInputFieldWrap>

                <SignupBtn type="submit">
                    Login
                </SignupBtn>

                <SignupLink to="/signup">
                    Don't have an account ? <span>Create one</span>
                </SignupLink>
            </SigunpForm>
        </SignupContainer>
    )
}

export default Login
