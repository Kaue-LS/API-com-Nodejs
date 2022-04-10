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
    box-shadow: 0px -10px 20px #00000090;    
    width: 100%;
    height:100% ;
    padding: 15px 0;
    background-color: #f4f4f4;
    
    section{
        margin: 0px auto;
        width: 90%;
  
    
    }
    label{
        margin:23px 0 ;
        font-size: 1.5rem;
    }
    p{
        text-align:justify;
        width: 99%;
        margin:10px 0px ;
    }
    `
