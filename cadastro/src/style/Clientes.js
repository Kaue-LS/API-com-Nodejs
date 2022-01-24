import styled from "styled-components";

export const Clientes=styled.div`
    background-color: white;
    border-radius:5px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin:10px auto;
    width: 90%;
    

`;
export const Number=styled.div`
    background-color: gray;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    font-size: 1.5rem;
`;

export const Name=styled.div`
margin: 0 auto 0 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
text-align: center;
flex-wrap: wrap;

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
background-color: gray;
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
background-color: gray;
    p{
        color: white;
font-size:1.5rem;
}
`
export const Buttons=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-transform: uppercase;
`
export const Editar=styled.div`
    background-color: grey;
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
export const Remover=styled.div`
border: 2px solid grey;
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