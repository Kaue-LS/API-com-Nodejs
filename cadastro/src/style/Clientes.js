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
    width: 70rem;
    

`;
export const Number=styled.div`
      background-color: #741443;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    font-size: 1.5rem;
`;

export const Name=styled.div`
margin: 0 auto 0 10px;
display: flex;
width: 25rem;
align-items: center;
flex-direction: row;
flex-wrap: nowrap;
padding: 0 10px 0 0px;
border-right:2px solid  #741443;
text-align: center;
flex-wrap: wrap;
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
    border-right: 2px solid  #741443;
    padding: 0 10px 0 0;
    text-transform: uppercase;
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