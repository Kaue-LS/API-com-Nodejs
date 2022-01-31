import { useState } from "react";
import { GetNomeClient, getToken,Logout} from "../../Services/Auth";
import * as S from "./Styled";
import { Get } from "../../Services/Api";
import { Link } from "react-router-dom";
export default function NavBar() {
  const auth=getToken()
  const name=GetNomeClient()
   const [expand,setExpand]=useState('expand_more')
  const Sair= async()=>{
    if(window.confirm("Deseja realmente sair do Sistema")){
        const response= await Get.get("/api/clientes/destroyToken",{headers:{token:getToken()}})
        if(response.status===200){
            Logout();
            window.location.href = '/'
          }else{
            alert("Não foi possível fazer o logout!");
          }
    }
}
  return (
    <>

        <S.NavBar>
          <S.Logo><Link style={{textDecoration:'none',color:'white'}}to='/'>Cadastro de Clientes</Link></S.Logo>
          <S.Cliente  onClick={()=>setExpand(expand==='expand_more'? 'expand_less':"expand_more")}>
          {!auth ?( 
            <>
          <div>
            <span className="material-icons">perm_identity</span>
            <p  style={{display:'block'}}>Bem vindo!</p>
            </div>
          
            <span className="material-icons">{expand}
            </span>

            {expand==='expand_less'&&(
              <S.Buttons>
                <div>
                <Link style={{textDecoration:'none',color:'white'}} to={'/login'}> <button style={{borderBottom:'1px solid gray'}}>Entrar</button></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/cadastrar'}><button>Cadastrar</button></Link>
                </div>
              </S.Buttons>
            )}
            </>
          ):(
            <>
            <div>
              <span className="material-icons">perm_identity</span>
              <p style={{display:'block'}}>{name}</p>
              </div>
            
              <span className="material-icons">{expand}
              {expand==='expand_less'&&(
                <S.Buttons>
                  <Link style={{textDecoration:'none',color:'white'}} to={'/cliente'}> <button style={{borderBottom:'1px solid gray'}}>Meu Perfil</button></Link>
                 <button onClick={()=>Sair()}>Sair</button>
                </S.Buttons>
              )}
              </span>
              </>
          )}
          </S.Cliente>
        </S.NavBar>
       
    </>
  );
}
