import styled from "styled-components";

export const Inicio=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Painel=styled.div`
    width: 100%;
    background-color: #FF8C00;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 3rem;
        color: white;
        text-transform: uppercase;
        @media (max-width:880px) {
                text-align: center;
        }
    }
    p{
        font-size: 1.5rem;
        color: white;
        text-transform: uppercase;
    }
`

export const Body=styled.div`
    box-shadow: 0px 0px 30px black;    
    width: 100%;
    padding: 15px 0;
    background-color: #f4f4f4;
    
    div{
        margin: 0px auto;
        width: 90%;
        label{
            margin: 10px 0;
        font-size: 1.5rem;
    }
    p{
        text-align:justify;
        width: 99%;
    }
    
    }
   
    `
