import styled from "styled-components";

export const Login=styled.div`
    width: 60%;
    border-radius: 10px;
    max-width: auto;
    background-color: #ffffff90;
    box-shadow:0px 0px 10px gray;
    margin: 5% auto;
    @media(max-width:880px){
        width: 90%;
    }

        h1{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: #341443;
            font-size: 3rem;
            color: white;
            text-transform: uppercase;
            text-align: center;
            margin: 0px auto;
        }

`

export const Form=styled.div`
    display: flex;
    padding: 10px 10px;
    flex-direction: column;
    justify-content: center;

    label{
        margin: 10px 0;
        font-size: 1.8rem;
    }
    input{
        border-radius: 10px;
        font-size: 1.2rem;
        height: 50px;
        padding: 10px 10px;
        outline: none;
    }
    button{
        background-color:#400043 ;
        cursor: pointer;
        font-weight: 800;
        font-size: 2rem;
        margin: 20px auto;
        padding: 10px 10px;
        color: white;
        border-radius: 10px;
        width: 50%;
    }
`