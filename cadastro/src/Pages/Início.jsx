import { useEffect, useState } from "react";
import { Get } from "../Services/Api";
import * as S from '../style/Clientes'
export default function Inicio() {
  const [data, setData] = useState();
  const [laoding, setLoading] = useState(true);
  useEffect(() => {
    if (laoding) {
      GETAPI();
    }
  });
  const GETAPI = async () => {
    const response =await Get.get("/api/clientes/")
      setData(response.data);
      setLoading(false);
    
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
                {
                  item.tipo===2?(
                    <S.Tipo2>
                      <p>Cliente</p>
                    </S.Tipo2>
                  ):(
                    <S.Tipo1>
                      <p>Administrador</p>
                    </S.Tipo1>
                  )
                }
                
                
             
                
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
