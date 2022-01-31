import styled from 'styled-components'

export const SideBar=styled.div`
    width: 15rem;
    height: 100vh;
    background-color: #721223;
    box-shadow: 0px 0px 10px black;
    position: fixed;
    .arrow_back_ios{
        
        position: relative;
        left: 55px;
    }
    .arrow_forward_ios{
        position: relative;
        left: 552px;

    }
   
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
text-align: center;
margin:1rem 15rem;
z-index: -999;
overflow: hidden;
background:linear-gradient(to right,#721223,#511443);
text-align: center;
width: 3rem;
padding: 10px 10px;
background-color: white;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        display: flex;
        align-items: center;
    font-weight: 700;
    font-size: 3rem;
    }
`
