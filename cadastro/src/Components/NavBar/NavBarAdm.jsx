import * as S from './Styled'
import { Link } from "react-router-dom";
import { GetNomeClient } from '../../Services/Auth';
export default function NavBarAdm(){
    const name=GetNomeClient()


 
    return(
        <>

        <S.NavBarAdm>
          <S.Logo><Link style={{textDecoration:'none',color:'white'}}to='/'>Cadastro de Clientes</Link></S.Logo>
          <S.Cliente style={{cursor:'default'}}  >
        
            <div>
              <span className="material-icons">perm_identity</span>
              <p style={{display:'block'}}>{name}</p>
              </div>
            
          </S.Cliente>
        </S.NavBarAdm>
       
    </>
    )

}
