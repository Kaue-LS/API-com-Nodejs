import * as S from '../style/Cadastrar'
import { useState } from 'react'
import { Post } from '../Services/Api'
import { Link } from 'react-router-dom'
export default function Cadastrar(){
    const [nome,setNome]=useState('')
    const [sobrenome,setSobrenome]=useState('')
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState("")
    const [erro,setErro]=useState("")
    const [termos,setTermos]=useState(false)

    const Cadastrar= async()=>{
        const regexp1=/@(gmail|hotmail).com/gi
        if(nome.length<3){
            setErro('Nome vázio')
        }
        else if(sobrenome.length<3){
            setErro('Sobrenome vázio')
        }
        else if(email.length===0){
            setErro("Email vázio")
        }
        else if( !email.match(regexp1)){
            setErro("Email não preenchido corretamente")
        }
        else if( senha.length<6){
            setErro("Senha precisa no máximo de 9 caracteres")
        }
        else if(!termos){
            setErro("Termos e condições não aceitas")
        }
        else{
            setErro("")
            const data={
                nome,
                sobrenome,
                email,
                admin:'User',
                senha
            }
           const response= await Post.post('/api/clientes',data)
           if(response.status===200){
            window.location.href='/cliente'
          }else{
            alert("Erro ao cadastrar Cliente")
          }
        }
    }
    return(
        <S.Cadastrar>
            <h1>Informe seus dados abaixo:</h1>

            <S.Form >
                <h4>Cadastro</h4>
                <span>{erro}</span>
                <S.FormControl>
                    <label>Nome:<span>*</span></label>
                    <input value={nome} onChange={e=>setNome(e.target.value)} type={'text'} name='Nome' placeholder='Digite seu nome...'/>
                    <label>Sobrenome:<span>*</span></label>
                    <input value={sobrenome} onChange={e=>setSobrenome(e.target.value)}  type={'text'} name='Sobrenome' placeholder='Digite seu Sobrenome...'/>
                </S.FormControl>
                <S.FormControl>
                    <label>Email:<span>*</span></label>
                    <input value={email} onChange={e=>setEmail(e.target.value)}  type={'email'} name='Email' placeholder='Digite seu Email...'/>
                    <label>Senha:<span>*</span></label>
                    <input value={senha} onChange={e=>setSenha(e.target.value)}  type={ 'password'} name='Senha' maxLength={9} placeholder='Digite seu Senha...'/>
                </S.FormControl>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <input onClick={()=>setTermos(true)} type={'checkbox'} ></input>  
            <p>Li e aceito os <Link to='/termos'>termos e condições</Link></p>  
            </div>
              <button onClick={Cadastrar}>Cadastrar</button>
              
            </S.Form>
        </S.Cadastrar>
    )
}