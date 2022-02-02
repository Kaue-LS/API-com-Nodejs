import styled from "styled-components";

export const Clientes=styled.div`
    background-color: white;
    border-radius:5px;
    border: 1px solid gray;
    display: flex;
    height: 50px;
    overflow:hidden;
    justify-content: space-between;
    flex-direction: row;
    margin:10px auto;
    width: 90%;
    div{
        display: flex;
        flex-direction: row;
    }
    @media (max-width:880px) {
       height: auto;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       div{
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: row;
           flex-wrap: wrap;
       }
    }
`;
export const Number=styled.div`
      background-color: #341443;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
    font-size: 1.5rem;
    @media (max-width:880px) {
        width: 100%;
        height:3rem;
        padding: 10px 10px;
    }
`;

export const Name=styled.div`
margin: 0 auto 0 2rem;
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: nowrap;
padding: 0 10px 0 0px;
text-align: center;
flex-wrap: wrap;
  @media (max-width:880px) {
      margin: 2rem auto;
    }
label{
    margin: 0 10px 0 0;
    font-weight: 700;
    font-size: 1.5rem;
}
p{
font-size:1.5rem;
}
`;

export const Tipo1=styled.div`
    margin: 0  0px 0 auto;
    display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 100%;
background-color: #741443;
@media (max-width:880px) {
       border-top-left-radius: 5px;
       border-top-right-radius: 5px;

    }
    p{
        color: white;
font-size:1.5rem;
}
`
export const Tipo2=styled.div`
   margin: 0  0px 0 auto;
    display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 100%;
background-color: #741443;
@media (max-width:880px) {
       border-radius: 5px;

    }

    p{
        color: white;
font-size:1.5rem;
}
`
export const Buttons=styled.div`
    display: flex;
    width: 15rem;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 0 10px 0 0;
    text-transform: uppercase;
    @media (max-width:880px) {
       margin: 10px auto;
    }

`
export const Editar=styled.div`
       background-color: #741443;

    display: flex;
justify-content: center;
align-items: center;
padding: 5px 10px;
color: #ffffff;
cursor: pointer;

    border-top-left-radius:5px;
    border-bottom-left-radius: 5px;
    p{
font-size:1.3rem;
}
`
export const Tipo=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

label{
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 10px;
}
`
export const Remover=styled.div`
border: 2px solid  #741443;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
    display: flex;
justify-content: center;
align-items: center;
padding: 3px 5px;
cursor: pointer;

    p{
font-size:1.3rem;
}
`