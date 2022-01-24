import styled from "styled-components";

export const Cadastrar=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-transform: uppercase;
        font-size: 2.5rem;
        margin: 1rem auto 1rem auto;
    }
`

export const Form=styled.div`

    h4{
        padding: 10px 10px;
        color: #ffffff;
        font-size: 1.4rem;
        text-transform: uppercase;
        text-align: center;
        background-color: gray;
        width: 100%;
    }
    button{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 10px 10px;
        margin: 10px auto;
        width: 50%;
    }
    display: flex;
    width: 70%;
    justify-content: center;
    flex-direction: column;
    border: 2px solid;
    border-radius:5px;
`

export const FormControl=styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0.5rem 2rem;

    label{
        text-transform: uppercase;
        font-size: 1.5rem;

        span{
            color:red;
        }
    }
    input{
        margin:10px 0;
        font-size: 1.2rem;
        padding: 10px 10px;
    }


`