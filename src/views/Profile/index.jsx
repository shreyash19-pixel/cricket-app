import React, { useState, useRef, useEffect } from 'react'
import { SignupContainer, SignupInputError, SignupInputFieldWrap, SigunpForm, SignupInputLabel, SignupSelectInput, SignupOptionsInput, SignupBtn } from '../../styles/Signup'
import { ProfileImg, ProfileName } from '../../styles/Sidebar'
import SideBar from '../../components/Sidebar';
import { DashboardNavWrap, DashboardWrap } from '../../styles/Dashboard'
import { GiHamburgerMenu } from "react-icons/gi";

const Profile = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    playingRole: "",
    battingStyle: "",
    bowlingStyle: "",
    jerseyNumber: "",
  })

  const [errors, setErrors] = useState({
    email: "",
    playingRole: "",
    battingStyle: "",
    bowlingStyle: "",
    jerseyNumber: "",
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

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleForm = (e) => {
    e.preventDefault();

    var mobileRegex = /^[0-9]*$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {};

    if (formData.email.trim() === "" || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid name.";
    }

    if (formData.playingRole === "") {
      newErrors.playingRole = "Please select a playing role.";
    }

    if (formData.battingStyle === "") {
      newErrors.battingStyle = "Please select a batting style.";
    }

    if (formData.jerseyNumber.length > 0) {
      if (!mobileRegex.test(formData.jerseyNumber)) {
        newErrors.jerseyNumber = "Please enter a valid jerysey number.";
      }
    }

    if (formData.jerseyNumber.length > 4) {
      newErrors.jerseyNumber = "Length of jersey Number should not be more than 4";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // postData(formData)
    }
  };

  return (
    <SignupContainer>
      <DashboardNavWrap>
        <GiHamburgerMenu style={{ fontSize: "24px", cursor: "pointer" }} onClick={openSidebar} />
      </DashboardNavWrap>
      <div ref={sidebarRef}>
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <SigunpForm onSubmit={handleForm}>
        <SignupInputFieldWrap profile={true}>
          <ProfileImg profile={true}></ProfileImg>
          <ProfileName>Shreyash</ProfileName>
        </SignupInputFieldWrap>

        <SignupInputFieldWrap>
          <SignupInputLabel>
            Mobile Number
          </SignupInputLabel>
          <input type="text" maxLength={10} name="tel" disabled />
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
          <SignupSelectInput name="bowlingStyle">
            <SignupOptionsInput value="" selected disabled>Select bowling style</SignupOptionsInput>
            <SignupOptionsInput value="pace">Pace</SignupOptionsInput>
            <SignupOptionsInput value="spin">Spin</SignupOptionsInput>
          </SignupSelectInput>

        </SignupInputFieldWrap>

        <SignupInputFieldWrap>
          <SignupInputLabel>
            Jersey Number
          </SignupInputLabel>
          <input maxLength={4} type="text" name="jerseyNumber" value={formData.jerseyNumber} onChange={handleChange} />
          {errors.jerseyNumber && <SignupInputError>{errors.jerseyNumber}</SignupInputError>}
        </SignupInputFieldWrap>

        <SignupBtn type="submit">
          Save
        </SignupBtn>
      </SigunpForm>
    </SignupContainer>
  )
}

export default Profile
