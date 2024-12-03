import React from 'react'
import { ProfileImg, ProfileInfoWrap, ProfileName, SidebarSections, SidebarSectionsContainer, SidebarWrap } from '../../styles/Sidebar'
import { MdEdit, MdPerson3 } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaTrophy, FaHeart, FaFlagCheckered  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ImClubs } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { VscDebugStart } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const SideBar = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <SidebarWrap className={`show-menu ${isSidebarOpen ? 'openMenu' : ''}`}>
      <ProfileInfoWrap>
        <ProfileImg></ProfileImg>
        <ProfileName>Shreyash <sup><MdEdit style={{cursor: "pointer" }} /></sup> </ProfileName>
        <RxCross2 style={{marginLeft: "auto", fontSize: "24px", cursor: "pointer" }} onClick={() => setIsSidebarOpen(false)}  />
      </ProfileInfoWrap>
      <SidebarSectionsContainer>

        <SidebarSections>
          Profile <CgProfile />
        </SidebarSections>

        <SidebarSections>
          My Matches <RiCalendarScheduleFill />
        </SidebarSections>

        <SidebarSections>
          My Tournaments <FaTrophy />
        </SidebarSections>

        <SidebarSections>
          My Teams <FaPeopleGroup />
        </SidebarSections>

        <SidebarSections>
          My Clubs <ImClubs />
        </SidebarSections>

        <SidebarSections>
          Start Match <VscDebugStart/>
        </SidebarSections>

        <SidebarSections>
          Create Tournament <FaFlagCheckered />
        </SidebarSections>

        <SidebarSections>
          Register As Club <MdPerson3 />
        </SidebarSections>

        <SidebarSections>
          Following <FaHeart />
        </SidebarSections>
      </SidebarSectionsContainer>
    </SidebarWrap>
  )
}

export default SideBar
