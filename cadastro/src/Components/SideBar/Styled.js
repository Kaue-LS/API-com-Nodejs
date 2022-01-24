import styled from 'styled-components'

export const SideBar=styled.div`
    width: 20vw;
    background-color: #4F4F4F;
    height: 100vh;
    position: fixed;

`;
export const Logo=styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-transform: capitalize;
    border-bottom: 2px solid black;
    padding: 5px;

    h1{
        font-size: 2rem;
        @media (max-width:880px) {
        font-size: 1.5rem;
    }
    }
  

`
export const Buttons=styled.div`
    display: flex;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 2px solid black;
    ul{
        color: #ffffff;
        text-decoration: none;

    }
    li{
        text-decoration: none;
        color: #ffffff;
        list-style: none;
        padding: 10px 10px;
        margin: 5px auto;
    }
`

export const Exit=styled.div`
width: 100%;
margin:10px auto;
    button{
        text-transform: uppercase;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        font-size: 1.3rem;
        margin: 5px 0.5rem;
        padding: 10px 40px;
    }
`
