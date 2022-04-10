import * as S from '../style/Cliente'
import { useState,useEffect } from 'react';
import { GetbyID } from '../Services/Api';
import { GetIdClient } from '../Services/Auth';
export default function Cliente() {
  const [loading,setLoading]=useState(true)
  const [dados,setDados]=useState()
  const id=GetIdClient()
  useEffect(()=>{
    if(loading){
      GetCliente()

    }
  })

  const GetCliente = async () => {
  const response=await  GetbyID.get(`/api/clientes.details/${id}`)
      setDados(response.data);
    setLoading(false);
  };
    return (
      <S.Cliente>
        <S.Info>
        {!loading?(
          <>
            <S.Data key={dados.id}>
           <h2>Dados do Cliente:</h2>
          <div className='labelControl'>
        <label>Nome Completo:</label>
       <p>{dados.nome} {dados.sobrenome}</p>
        </div>
        <div className='labelControl'>
        <label>Email:</label>
        <p>{dados.email}</p>
        </div>
        <div className='labelControl'>
        <label>Tipo:</label>
       {
          dados.admin==="Admin"?(
            <p>Administrador</p>
            ):(
              <p>Cliente</p>
                )
          }
         </div>
     </S.Data>
      
          </>
        ):(
          <div>
            <h1>Carregando cliente ...</h1>
          </div>
        )}
      
          <S.Label>
            <h2>Ja me cadastrei, e agora?</h2>
            <p>Agora que já se cadastrou, pode voltar a tela incial, e pronto, você terminou o cadastro, você pode se cadastrar novamente caso queira, mas claro, com outra conta.</p>
          </S.Label>
          </S.Info>
      </S.Cliente>
    );
  }
  