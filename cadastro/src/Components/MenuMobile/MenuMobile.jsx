import * as S from './Styled'
import { useState } from 'react';
import { Get } from '../../Services/Api';
import { Link } from 'react-router-dom';
import { GetNomeClient, getToken ,Logout} from '../../Services/Auth';
export default function MenuMobile() {
  const auth=getToken()
  const name=GetNomeClient()
    const [open,setOpen]=useState(false)


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
    <S.MenuMobile>
      <span onClick={()=>setOpen(open? false:true)} className="material-icons">menu</span>
      {open &&(
      <S.OpenMenu>
          {!auth ?( 
            <>
          <S.Perfil>
          <span className="material-icons">perm_identity</span>

            <p  style={{display:'block'}}>Bem vindo!</p>
            </S.Perfil>
            <S.Buttons>
                <Link style={{textDecoration:'none',color:'white'}} to={'/login'}> <button>Entrar</button></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/cadastrar'}><button>Cadastrar</button></Link>
              </S.Buttons>
            </>
          ):(
            <>
            {/* logado */}
            <S.Perfil>
            <span className="material-icons">perm_identity</span>
              <p style={{display:'block'}}>{name}</p>
            </S.Perfil>
            <S.Buttons>
              <Link  style={{textDecoration:'none',color:'white',margin:'-10px 0px 0 0'}} to={'/cliente'}> <button>Meu Perfil</button></Link>
             <button onClick={()=>Sair()}>Sair</button>
            </S.Buttons>
              </>
          )}
      </S.OpenMenu>
      )}
    </S.MenuMobile>
  );
}
