import { useState } from "react";
import { GetNomeClient, getToken,Logout} from "../../Services/Auth";
import * as S from "./Styled";
import { Get } from "../../Services/Api";
import { Link } from "react-router-dom";
import MenuMobile from "../MenuMobile/MenuMobile";
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
            {/* Nao logado */}
          {!auth ?( 
            <>
          <S.Perfil>
            <span className="material-icons">perm_identity</span>
            <p  style={{display:'block'}}>Bem vindo!</p>
            </S.Perfil>
            <span className="material-icons">{expand}</span>
        
            </>
          ):(
            <>
            {/* logado */}
            <S.Perfil>
              <span className="material-icons">perm_identity</span>
              <p style={{display:'block'}}>{name}</p>
            </S.Perfil>
            <span className="material-icons">{expand}</span>

              </>
          )}
          </S.Cliente>
          <MenuMobile></MenuMobile>

        </S.NavBar>
        <S.IconButtons>
        {!auth ?( 
          <>
            {expand==='expand_less'&&(
              <S.Buttons>
                <Link style={{textDecoration:'none',color:'white'}} to={'/login'}> <button>Entrar</button></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/cadastrar'}><button>Cadastrar</button></Link>
              </S.Buttons>
             
            )}
             </>
        ):(
          <>
          {expand==='expand_less'&&(
            <S.Buttons>
              <Link  style={{textDecoration:'none',color:'white',margin:'-10px 0px 0 0'}} to={'/cliente'}> <button>Meu Perfil</button></Link>
             <button onClick={()=>Sair()}>Sair</button>
            </S.Buttons>
          )}
          </>
        )
        }
        </S.IconButtons>
       
    </>
  );
}
