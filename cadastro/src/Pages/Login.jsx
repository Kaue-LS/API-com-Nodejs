import * as S from '../style/Login'
import { useState } from 'react'
import { Post } from '../Services/Api'
import { SetNomeClient,SetIdClient,Logar, setTipoCliente } from '../Services/Auth'
export default function LogIn(){
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')

    const Login= async()=>{
        const Data={
            email,
            senha
        }
        await Post.post('/api/clientes/login',Data)
        .then(res=>{
            if(res.status===200){
                if(res.data.status===1){
                    Logar(res.data.token)
                    SetIdClient(res.data.id)
                    SetNomeClient(res.data.name)
                    setTipoCliente(res.data.tipo)

                    window.location.href='/'

                }
                else if(res.data.status===2){
                    alert(`Atenção: ${res.data.error}`)
                }
            }else{
                alert('Erro no servidor')
            }
        })
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
        </S.Form>  
        </S.Login>
    )
}