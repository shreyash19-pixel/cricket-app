import { Link } from "react-router-dom";
import styled from "styled-components";


export const SignupContainer = styled.div`
    width: 100%;
    height: ${(props) => props.login ? "100vh" : "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SignupHeading = styled.h1`
    font-weight: 600;
    text-align: left;
`

export const SigunpForm = styled.form`
    width: 100%;
    max-width: 400px;
    min-height: 300px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    
`

export const SignupInputFieldWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 92px;
    position: relative;
    align-items : ${(props) => props.profile ? "center" : "flex-start"};

    input{
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        outline: none;
        border: 1px solid black;
    }
`

export const SignupInputLabel = styled.label`
    font-size: 14px;

`

export const SignupInputError = styled.p`
    color: red;
    font-size: 14px;
`

export const SignupLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin-block: 10px;

    span{
        text-decoration: underline;
    }
`

export const SignupSelectInput = styled.select`
    width: 100%;
    padding: 12px;
    outline: none;
    border-radius: 10px;
`

export const SignupOptionsInput = styled.option`
    
`

export const SignupBtn = styled.button`
    border-radius: 20px;
    background-color: orange;
    color: white;
    padding: 14px 16px;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    border: none;
    outline: none;
`

