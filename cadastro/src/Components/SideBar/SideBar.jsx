import { Link } from 'react-router-dom'
import * as S from './Styled'
export default function SideBar(){
    return(
        <S.SideBar>
        <S.Logo>
        <Link style={{textDecoration:"none",color:"#ffffff"}} to={'/'}> <h1>Cadastro de Clientes</h1></Link>
        </S.Logo>
        <S.Buttons>
            <nav>
                <ul>
                    <li><Link style={{textDecoration:"none",color:"#ffffff"}} to={'/login'}>Entrar</Link></li>
                    <li><Link style={{textDecoration:"none",color:"#ffffff"}} to={'/cadastrar'}>Cadastrar</Link></li>
                    <li><Link style={{textDecoration:"none",color:"#ffffff"}} to={'/admin/clientes'}>Clientes</Link></li>
                    <li>LogOut</li>
                </ul>
            </nav>
        </S.Buttons>
        <S.Exit>
            <button>Sair</button>
        </S.Exit>
        </S.SideBar>
    )
}