import styled from "styled-components";

export const MenuMobile=styled.div`
display: none;
@media (max-width:880px){
    display: block;
    margin: 10px auto;
    span{
        margin: 0 0rem;
        color: white;
        font-size: 4rem;
    }
}
`
export const OpenMenu=styled.div`
    display: flex;
    border: 2px solid white;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15rem;
    position: absolute;
    margin: 0px -11rem;
    background-color: #741443;

    p{
        color: white;
    }
`
export const Buttons=styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    button{
    background-color: white;
        font-weight: 700;
        border: none;
        margin: 1px 0;
        color:  #741443;
        padding: 10px 10px;
        width: 6rem;
        transition: 400ms;
        :hover{
            border:1px solid white;
            color: white;
            padding: 10px 10px;
            background-color: #741443;
        }
    }
    `

export const Perfil=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`