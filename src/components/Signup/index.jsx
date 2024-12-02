import React, { useState } from 'react'
import { SignupBtn, SignupContainer, SignupHeading, SignupInput, SignupInputError, SignupInputFieldWrap, SignupInputLabel, SignupWrap, SigunpForm } from '../../styles/Signup'

const Signup = () => {


    const [formData, setFormData] = useState({
        name: "",
        password: "",
        mobile: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        password: "",
        mobile: ""
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

        var regex = new RegExp("^[a-zA-Z ]+$");

        const newErrors = {};
        if (formData.name.trim() === "") {
            newErrors.name = "Please enter a valid name.";
        }

        if (formData.mobile.trim() === "" || regex.test(formData.mobile)) {
            newErrors.mobile = "Please enter a valid mobile number.";
        }
        else if(formData.mobile.length > 10)
        {
            newErrors.mobile = "Length of number cannot be more than 10";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "Please enter a valid password.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully!", formData);
        }
    };

    return (
        <SignupContainer>
            <SignupWrap>
                <SignupHeading>
                    Sign up
                </SignupHeading>
                <SigunpForm onSubmit={handleForm}>
                    <SignupInputFieldWrap>
                        <SignupInputLabel>
                            Full Name
                        </SignupInputLabel>
                        <SignupInput type="text" name="name" value={formData.name} onChange={handleChange} />
                        {errors.name && <SignupInputError>{errors.name}</SignupInputError>}
                    </SignupInputFieldWrap>

                    <SignupInputFieldWrap>
                        <SignupInputLabel>
                            Mobile Number
                        </SignupInputLabel>
                        <SignupInput type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                        {errors.mobile && <SignupInputError>{errors.mobile}</SignupInputError>}
                    </SignupInputFieldWrap>

                    <SignupInputFieldWrap>
                        <SignupInputLabel>
                            Password
                        </SignupInputLabel>
                        <SignupInput type="password" name="password" value={formData.password} onChange={handleChange} />
                        {errors.password && <SignupInputError>{errors.password}</SignupInputError>}
                    </SignupInputFieldWrap>

                    <SignupBtn type="submit">
                        Create Account
                    </SignupBtn>
                </SigunpForm>
            </SignupWrap>
        </SignupContainer>
    )
}

export default Signup
