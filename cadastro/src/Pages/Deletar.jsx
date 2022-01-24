import * as S from '../style/Deletar'
import { useLocation } from 'react-router-dom'
import { Delete } from '../Services/Api'
export default function Deletar(){
    const location=useLocation()
    const {state}=location.state

    const DeletarCliente=async()=>{
        const response= await Delete.delete(`/api/clientes/${state._id}`)
        if(response.status===200){
            window.location.href='/'
          }else{
            alert("Erro ao excluir cliente")
          }
    }
    return(
        <S.Deletar>
            <h1>Tem certeza que quer excluir cliente?</h1>
            <S.Dados>
                <div>
                <label>Nome completo:</label>
                <p>{state.nome} {state.sobrenome}</p>
                </div>
            </S.Dados>
            <S.Choice>
                <button >Cancelar</button>
                <button onClick={()=>DeletarCliente()} >Deletar</button>
            </S.Choice>
        </S.Deletar>
    )
}