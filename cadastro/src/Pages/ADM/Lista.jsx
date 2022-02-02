import { useEffect, useState } from "react";
import { Get } from "../../Services/Api";
import * as S from '../../style/Lista'
import {Link} from 'react-router-dom'
export default function Cliente() {
  const [data, setData] = useState();
  const [laoding, setLoading] = useState(true);
  useEffect(() => {
    if (laoding) {
      GETAPI();
    }
  });
  const GETAPI = async () => {
    Get.get("/api/clientes").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };
  return (
    <>
      {!laoding ? (
        <>

            {data.map((item, index)=> (
              <S.Clientes key={index}>
                <S.Number>
                  <p>{index+1}</p>
                </S.Number>
                <S.Name>

                  <p>{item.nome} {item.sobrenome}</p>
                </S.Name>
                <div>
                {item.admin===true?(
                  null
                ):(
                  <S.Buttons>
                  <Link style={{textDecoration:"none",color:"#ffffff"}} to={{pathname:'/admin/editar/'+item._id}} state={{state:item._id}}>
                  <S.Editar>
                    <p>Editar</p>
                  </S.Editar>
                  </Link>
                   <Link style={{textDecoration:"none",color:"#000000"}} to={{pathname:'/admin/deletar/'+item._id}} state={{state:item}}>
                   <S.Remover>
                     <p>Remover</p>
                   </S.Remover>
                   </Link>
                   </S.Buttons>
                )}
                <S.Tipo>
                {
                  item.admin===false?(
                    <S.Tipo2>
                      <p>Cliente</p>
                    </S.Tipo2>
                  ):(
                    <S.Tipo1>
                      <p>Administrador</p>
                    </S.Tipo1>
                  )
                }
                </S.Tipo>
                
              
                </div>
                
              </S.Clientes>
            ))
            }
         
        </>
      ) : (
        "Carregando"
      )}
      </>
  );
}
