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
    @media (max-width:880px) {
        margin: 0 10px;
    }
`;

export const Buttons=styled.div`
    position: fixed;
    top:60px;
    background-color: white;
    @media (max-width:880px) {

    }
    div{
        margin: 5px 5px;
    }
    button{
        padding: 10px 10px;
        font-weight: 700;
        background: none;
        width: 15vw;
        border: none;
        
        color: gray;
        background-color: #ffffff;
        cursor: pointer;
        transition: 400ms ease;
        :hover{
            color: white;
            background-color:  #741443;
        }
    }
`

export const Cliente=styled.div`
margin: 0 auto;
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
    span{
        
        color: white;
        font-size: 2.5rem;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            display: block;
            color: white;
            @media (max-width:880px){
        display: none;
    }
        }
        span{
        color: white;
        font-size: 2rem;
    }
    }
`