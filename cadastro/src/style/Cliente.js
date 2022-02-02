import styled from "styled-components";

export const Cliente=styled.div`
    width: 100%;
    padding: 0px 10rem;
    height: 100vh;
    box-shadow: 0px 0px 10px;
    margin: 0rem auto 0 auto;
    background-color:#341443;
    h2{
    font-size: 1.8rem;
}
@media (max-width:880px) {
    padding: 2rem;
        width: 100%;
        height: auto;
    }
`
export const Info=styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2rem 2rem;
    height: 100vh;
    box-shadow: 0px 0px 30px;
    background-color: white;
    @media (max-width:880px) {
        width: 100%;
        height: auto;
    }
`
export const Data=styled.div`

display: flex;
flex-direction: column;
div{
        display: flex;
        flex-direction: row;
        align-items: center;

        label{
            text-align: justify;
            width: 8rem;
            font-size: 1.5rem;
        }
        p{
            font-size: 1.4rem;
        }
    }
`

export const Label=styled.div`
margin: 10px 0;
h2{
    font-size: 1.8rem;
}
    p{
        font-size: 1.3rem;
    }
`