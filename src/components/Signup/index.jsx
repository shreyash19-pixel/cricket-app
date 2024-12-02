import React, { useState } from 'react'
import { SignupBtn, SignupContainer, SignupHeading, SignupInput, SignupInputError, SignupInputFieldWrap, SignupInputLabel, SignupOptionsInput, SignupSelectInput, SignupWrap, SigunpForm } from '../../styles/Signup'

const Signup = () => {


    const [formData, setFormData] = useState({
        name: "",
        password: "",
        mobile: "",
        email: "",
        jerseyNumber: "",
        playingRole: "",
        battingStyle: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        password: "",
        mobile: "",
        email: "",
        jerseyNumber: "",
        playingRole: "",
        battingStyle: ""
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
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const newErrors = {};
        if (formData.name.trim() === "") {
            newErrors.name = "Please enter a valid name.";
        }

        if (formData.email.trim() === "" || !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid name.";
        }

        if (formData.mobile.trim() === "" || !mobileRegex.test(formData.mobile)) {
            newErrors.mobile = "Please enter a valid mobile number.";
        }
        else if (formData.mobile.length > 10 || formData.mobile.length < 10) {
            newErrors.mobile = "Length of mobile number should be 10";
        }

        if (formData.jerseyNumber.length > 0) {
            if (!mobileRegex.test(formData.jerseyNumber)) {
                newErrors.jerseyNumber = "Please enter a valid jerysey number.";
            }
        }

        if (formData.jerseyNumber.length > 4) {
            newErrors.jerseyNumber = "Length of jersey Number should not be more than 4";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "Please enter a valid password.";
        }

        if (formData.playingRole === "") {
            newErrors.playingRole = "Please select a playing role.";
        }

        if (formData.battingStyle === "") {
            newErrors.battingStyle = "Please select a batting style.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
           
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
                            Jersey Number
                        </SignupInputLabel>
                        <SignupInput type="text" name="jerseyNumber" value={formData.jerseyNumber} onChange={handleChange} />
                        {errors.jerseyNumber && <SignupInputError>{errors.jerseyNumber}</SignupInputError>}
                    </SignupInputFieldWrap>

                    <SignupInputFieldWrap>
                        <SignupInputLabel>
                            Email
                        </SignupInputLabel>
                        <SignupInput type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <SignupInputError>{errors.email}</SignupInputError>}
                    </SignupInputFieldWrap>


                    <SignupInputFieldWrap>
                        <SignupInputLabel>
                            Playing Role
                        </SignupInputLabel>
                        <SignupSelectInput name="playingRole"
                            value={formData.playingRole} onChange={handleChange}>
                            <SignupOptionsInput selected disabled>Select playing role</SignupOptionsInput>
                            <SignupOptionsInput value="all-rounder">All Rounder</SignupOptionsInput>
                            <SignupOptionsInput value="batter">Batter</SignupOptionsInput>
                            <SignupOptionsInput value="bowler">Bowler</SignupOptionsInput>
                            <SignupOptionsInput value="wicketkeeper-batter">Wicket Keeper Batter</SignupOptionsInput>
                        </SignupSelectInput>
                        {errors.playingRole && <SignupInputError>{errors.playingRole}</SignupInputError>}

                    </SignupInputFieldWrap>

                    <SignupInputFieldWrap>
                        <SignupInputLabel>
                            Batting Style
                        </SignupInputLabel>
                        <SignupSelectInput name="battingStyle"
                            value={formData.battingStyle} onChange={handleChange}>
                            <SignupOptionsInput selected disabled>Select batting style</SignupOptionsInput>
                            <SignupOptionsInput value="right-hand-bat">Right Hand Bat</SignupOptionsInput>
                            <SignupOptionsInput value="left-hand-bat">Left Hand Bat</SignupOptionsInput>
                        </SignupSelectInput>
                        {errors.battingStyle && <SignupInputError>{errors.battingStyle}</SignupInputError>}

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
