import React, { useState } from 'react'
import { SignupBtn, SignupContainer, SignupHeading, SignupInputError, SignupInputFieldWrap, SignupInputLabel, SignupLink, SignupOptionsInput, SignupSelectInput, SigunpForm } from '../../styles/Signup'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import usePost from '../../hooks/usePost';

const Signup = () => {

    const { postData } = usePost('');


    const [formData, setFormData] = useState({
        name: "",
        password: "",
        tel: "",
        email: "",
        jerseyNumber: "",
        playingRole: "",
        battingStyle: "",
        bowlingStyle: "",
        pace: "",
        spin: ""
    })

    const [isPassVisible, setIsPassVisible] = useState(false)

    const [errors, setErrors] = useState({
        name: "",
        password: "",
        tel: "",
        email: "",
        jerseyNumber: "",
        playingRole: "",
        battingStyle: "",
        bowlingStyle: "",
        pace: "",
        spin: ""
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

        if (formData.tel.trim() === "" || !mobileRegex.test(formData.tel)) {
            newErrors.tel = "Please enter a valid mobile number.";
        }
        else if (formData.tel.length < 10) {
            newErrors.tel = "Length of mobile number should be 10";
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
            postData(formData)
        }
    };

    return (
        <SignupContainer>
            <SigunpForm onSubmit={handleForm}>
                <SignupHeading>
                    Sign up
                </SignupHeading>
                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Full Name
                    </SignupInputLabel>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <SignupInputError>{errors.name}</SignupInputError>}
                </SignupInputFieldWrap>

                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Mobile Number
                    </SignupInputLabel>
                    <input type="text" maxLength={10} name="tel" value={formData.mobile} onChange={handleChange} />
                    {errors.tel && <SignupInputError>{errors.tel}</SignupInputError>}
                </SignupInputFieldWrap>

                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Jersey Number
                    </SignupInputLabel>
                    <input maxLength={4} type="text" name="jerseyNumber" value={formData.jerseyNumber} onChange={handleChange} />
                    {errors.jerseyNumber && <SignupInputError>{errors.jerseyNumber}</SignupInputError>}
                </SignupInputFieldWrap>

                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Email
                    </SignupInputLabel>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <SignupInputError>{errors.email}</SignupInputError>}
                </SignupInputFieldWrap>


                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Playing Role
                    </SignupInputLabel>
                    <SignupSelectInput name="playingRole"
                        value={formData.playingRole} onChange={handleChange}>
                        <SignupOptionsInput value="" selected disabled>Select playing role</SignupOptionsInput>
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
                        <SignupOptionsInput value="" selected disabled>Select batting style</SignupOptionsInput>
                        <SignupOptionsInput value="right-hand-bat">Right Hand Bat</SignupOptionsInput>
                        <SignupOptionsInput value="left-hand-bat">Left Hand Bat</SignupOptionsInput>
                    </SignupSelectInput>
                    {errors.battingStyle && <SignupInputError>{errors.battingStyle}</SignupInputError>}

                </SignupInputFieldWrap>

                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Bowling Style
                    </SignupInputLabel>
                    <SignupSelectInput name="bowlingStyle"
                        value={formData.bowlingStyle} onChange={handleChange}>
                        <SignupOptionsInput value="" selected disabled>Select bowling style</SignupOptionsInput>
                        <SignupOptionsInput value="pace">Pace</SignupOptionsInput>
                        <SignupOptionsInput value="spin">Spin</SignupOptionsInput>
                    </SignupSelectInput>

                </SignupInputFieldWrap>

                {formData.bowlingStyle === "pace" && (<SignupInputFieldWrap>
                    <SignupInputLabel>
                        Pace
                    </SignupInputLabel>
                    <SignupSelectInput name="pace"
                        value={formData.pace} onChange={handleChange}>
                        <SignupOptionsInput value="" selected disabled>Select</SignupOptionsInput>
                        <SignupOptionsInput value="right-arm-fast">Right Arm Fast</SignupOptionsInput>
                        <SignupOptionsInput value="right-arm-medium">Right Arm Medium</SignupOptionsInput>
                        <SignupOptionsInput value="left-arm-fasr">Left Arm Fast</SignupOptionsInput>
                        <SignupOptionsInput value="left-arm-medium">Left Arm Medium</SignupOptionsInput>
                    </SignupSelectInput>

                </SignupInputFieldWrap>)}

                {formData.bowlingStyle === "spin" && (<SignupInputFieldWrap>
                    <SignupInputLabel>
                        Spin
                    </SignupInputLabel>
                    <SignupSelectInput name="spin"
                        value={formData.spin} onChange={handleChange}>
                        <SignupOptionsInput value="" selected disabled>Select</SignupOptionsInput>
                        <SignupOptionsInput value="right-arm-off-break">Right Arm Off Break</SignupOptionsInput>
                        <SignupOptionsInput value="right-arm-leg-break">Right Arm Leg Break</SignupOptionsInput>
                        <SignupOptionsInput value="left-arm-off-break">Left Arm Off Break</SignupOptionsInput>
                        <SignupOptionsInput value="left-arm-leg-break">Left Arm Leg Break</SignupOptionsInput>
                    </SignupSelectInput>

                </SignupInputFieldWrap>)}

                <SignupInputFieldWrap>
                    <SignupInputLabel>
                        Password
                    </SignupInputLabel>
                    <input type={isPassVisible ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
                    {!isPassVisible && (<FaRegEye style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }} onClick={() => setIsPassVisible(!isPassVisible)} />)}
                    {isPassVisible && (<FaRegEyeSlash style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }} onClick={() => setIsPassVisible(!isPassVisible)} />)}
                    {errors.password && <SignupInputError>{errors.password}</SignupInputError>}

                    <SignupLink to="/login" >
                        Alreay have an account? <span>Login</span>
                    </SignupLink>
                </SignupInputFieldWrap>

                <SignupBtn type="submit">
                    Create Account
                </SignupBtn>
            </SigunpForm>
        </SignupContainer>
    )
}

export default Signup
