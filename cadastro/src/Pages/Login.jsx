import * as S from '../style/Login'
import { useState } from 'react'
import { Post } from '../Services/Api'
import { SetNomeClient,SetIdClient,Logar, setAdminCliente, GetAdminClient } from '../Services/Auth'
import { Link } from 'react-router-dom'
export default function LogIn(){
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')

    const Login= async()=>{
      
        const Data={
            email,
            senha
        }
        const res=await Post.post('/api/clientes/login',Data)
            if(res.status===200){
                if(res.data.status===1){
                    Logar(res.data.token)
                    SetIdClient(res.data.id)
                    SetNomeClient(res.data.nome)
                    setAdminCliente(res.data.admin)
                    const tipo=JSON.parse(GetAdminClient())
                    if(tipo===true){
                        console.log(tipo)
                        console.log('admin')
                        window.location.href='/'
                    }
                    else if(tipo===false){
                        console.log(tipo)
                        console.log('cliente')
            
                        window.location.href='/cliente'
                    }
                }
                else if(res.data.status===2){
                    alert(`Atenção: ${res.data.error}`)
                }
            }else{
                alert('Erro no servidor')
            }
        
    }
   
    return(
        <S.Login>
         <h1>Login</h1>
         <S.Form>
            <label>Email:</label>
            <input value={email} placeholder='Seu email' onChange={e=>setEmail(e.target.value)} type={'text'}/>
            <label>Senha</label>
            <input type={'password'} placeholder='Sua senha' onChange={e=>setSenha(e.target.value)}/> 
            
            <button onClick={()=>Login()}>Entrar</button>
            <div>
                <p>Não possui conta ainda? <Link to='/cadastrar'>Cadastre-se já!</Link></p>
            </div>
        </S.Form>  
        </S.Login>
    )
}