import styled from "styled-components";

export const Termos=styled.div`
    width: 80%;
    box-shadow:0px 0px 20px;
    margin: 30px auto;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: #341443;
            font-size: 3rem;
            color: white;
            text-transform: uppercase;
            text-align: center;
            margin: 0px auto;
    }
    p{
        padding: 10px 10px;
        text-align: justify;
    }
    button{
        font-weight: 700;
        background-color:#741443;
        margin:10px auto;
        padding: 20px 20px;
        color: white;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        transition: 200ms ;
        :hover{
            background-color: #341443;
        }
    }
`
