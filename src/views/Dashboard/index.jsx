import React, { useState, useEffect, useRef } from 'react'
import { DashboardNavWrap, DashboardWrap } from '../../styles/Dashboard'
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from '../../components/Sidebar';

const Dashboard = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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


  return (
    <DashboardWrap>
      <DashboardNavWrap>
        <GiHamburgerMenu style={{ fontSize: "24px", cursor: "pointer" }} onClick={openSidebar} />
      </DashboardNavWrap>

      <div ref={sidebarRef}>
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen= {setIsSidebarOpen} />
      </div>

    </DashboardWrap>
  )
}

export default Dashboard
