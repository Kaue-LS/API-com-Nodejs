import styled from "styled-components";

export const Cadastrar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
      color: white;
      text-align: center;
      padding: 10px 10px;
      width: 100%;
      background-color:#441443;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin: 1rem auto 1rem auto;
  }
`;

export const Form = styled.div`
  background-color: white;
  display: flex;
  box-shadow: 0px 0px 10px;
  width: 60%;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 1rem 0;
  @media(max-width:880px){
        width: 90%;
    }
  h4 {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #341443;
    font-size: 3rem;
    color: white;
    text-transform: uppercase;
    text-align: center;
    margin: 0px auto;
  }
  span{
      margin: 10px auto;
    font-weight: 700;
      font-size: 2rem;
      color: red;
      text-decoration: underline;
  }
  button{
        background-color:#400043 ;
        cursor: pointer;
        font-weight: 800;
        font-size: 2rem;
        margin: 20px auto;
        padding: 10px 10px;
        color: white;
        border-radius: 10px;
        width: 50%;
    }
`;

export const FormControl = styled.div`
  display: flex;
    padding: 10px 10px;
    flex-direction: column;
    justify-content: center;

    label{
        margin: 10px 0;
        font-size: 1.8rem;

        span{
            font-size: 1.5rem;
            text-decoration: none;
            color: red;
        }
    }
    input{
        border-radius: 10px;
        font-size: 1.2rem;
        height: 50px;
        padding: 10px 10px;
        outline: none;
    }
   
`;
