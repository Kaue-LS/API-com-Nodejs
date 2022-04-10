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
        console.log(res)
            if(res.status===200){
              
                if(res.data.status===2){
                    alert(`Atenção: ${res.data.error}`)
                }
                else{
                    Logar(res.data.token)
                    SetIdClient(res.data.id)
                    SetNomeClient(res.data.nome)
                    setAdminCliente(res.data.admin)

                      const tipo=GetAdminClient()
                   
                     if(tipo==='User'){
                        console.log(tipo)
                        console.log('cliente')
            
                        window.location.href='/cliente'
                    }
                    else{
                        console.log(tipo)
                        console.log('admin')
                        window.location.href='/'
                    }
                }
            }else{
                alert('Erro no servidor')
            }
        
    }
   
    return(
        <S.Login>
         <h1>Login</h1>
         <S.Form on>
            <label>Email:</label>
            <input value={email} placeholder='Seu email' onChange={e=>setEmail(e.target.value)} type={'email'}/>
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