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
       <p>{dados.nome}</p>
        </div>
        <div className='labelControl'>
        <label>Email:</label>
        <p>{dados.email}</p>
        </div>
        <div className='labelControl'>
        <label>Tipo:</label>
       {
          dados.admin?(
            <p>Administrador</p>
            ):(
              <p>Cliente</p>
                )
          }
         </div>
     </S.Data>
      
          </>
        ):(
          'carregando'
        )}
      
          <S.Label>
            <h2>Ja me cadastrei, e agora?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores eaque harum cumque aliquam. Commodi laboriosam adipisci ex architecto autem, fuga neque, nesciunt eius quam error hic dolor repellendus quisquam.</p>
          </S.Label>
          </S.Info>
      </S.Cliente>
    );
  }
  