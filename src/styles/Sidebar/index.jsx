import styled from "styled-components";

export const SidebarWrap = styled.div`
 
`

export const ProfileInfoWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    min-height: 70px;
    border-bottom: 1px solid #dadada;
    padding-right: 16px;
`

export const ProfileImg = styled.div`
    width: 60px;
    height: 60px;
    background-color: orange;
    border-radius: 50%;
    margin-left: ${(props) => props.profile ? "0px" : "16px"}
`

export const ProfileName = styled.h2`
    font-weight: 500;
    color: black;
`

export const SidebarSectionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    padding-left: 20px;
    padding-top: 24px;
`

export const SidebarSections = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    font-size: 18px;
    cursor: pointer;
`