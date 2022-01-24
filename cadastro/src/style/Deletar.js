import styled from "styled-components";

export const Deletar=styled.div`
    width: 80%;
    border: 1px solid gray;
    margin: 10vh auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
        color:#ffffff;
        background-color: gray;
        width: 100%;

    }
`
export const Dados=styled.div`
    div{
        margin:20px 0;
        label{
            font-size: 2rem;
        }
    }
`
export const Choice=styled.div`
    margin: 2% auto;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    button{
        font-weight: 700;
        font-size: 1.2rem;
        border-collapse: collapse;
        padding: 10px 15px;

    }
    `