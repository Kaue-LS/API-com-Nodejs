import styled from "styled-components";

export const NavBar=styled.nav`
    width: 100%;
    z-index: 99999;
    height: 4rem;
    background-color: #741443;
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px black;
   
`
export const NavBarAdm=styled.div`
    width: 100%;
    z-index: 99999;
    height: 4rem;
    background-color: #741443;
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
    align-items: center;
`


export const Logo=styled.div`
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto;
    text-transform: capitalize;
 
`;
export const IconButtons=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

`
export const Buttons=styled.div`
    display: block;
    border: 2px solid  #741443;
    padding: 5px 5px;
    background-color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    margin: 12vh 0 0 58vw;
    button{
        text-transform: uppercase;
        margin: auto auto;
        text-decoration: none;
        font-weight: 700;
        margin: 1px 0;
        font-size: 1rem;
        background-color: #ffffff;
        border: none;
        width:8rem;
        padding: 10px 10px;
        transition: 400ms ;

        :hover{
            color: white;
            padding: 10px 10px;
            background-color: #741443;
        }

    }
`

export const Cliente=styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: row;
    @media (max-width:880px) {
        display: none;
    }
    span{
        color: white;
        margin: 0 10px;
        font-size: 2.5rem;
    }

`
export const Perfil=styled.div`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span{
        font-size: 2rem;
    }
`


