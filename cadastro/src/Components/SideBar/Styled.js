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
        display: flex;
        text-decoration: none;
        color: #ffffff;
        padding: 10px 10px;
        text-align: justify;
        list-style: none;
        margin: 30px 10px;
        :hover{
            animation: sliceBorder 1s forwards;

            @keyframes sliceBorder {
                0%{
                    width: 1rem;
                    border-bottom: 1px solid white;
                }
                50%{
                    background-color: white;
                    color:#721223 ;
                    border-bottom: 4px solid #341443;
                }
                100%{
                    background-color: white;
                    color:#721223 ;
                    width: 8rem;
                    border-bottom: 4px solid #341443;
                }
            }
        }
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
export const Adm=styled.div`
    display: none;
    @media (max-width:880px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
        margin: auto 10px;
        font-size: 2rem;
        span{
            margin: 0 10px;
            border-radius: 100%;
            border: 3px solid white;
            font-size: 3rem;
        }
    }
`