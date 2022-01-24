import * as S from '../style/Cadastrar'
import { useEffect, useState} from 'react'
import { Get, Put} from '../Services/Api'
import { useParams } from 'react-router-dom'
export default function Editar(){
    const state= useParams()
    const id=state.id
    const [nome,setNome]=useState("")
    const [sobrenome,setSobrenome]=useState("")
    const [tipo,setTipo]=useState("")
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState('')
    const [erro,setErro]=useState("")
    const [loading,setLoading]=useState(true)


   
    useEffect(()=>{
        if(loading){
            const GetApi=async()=>{
                const response = await Get.get(`/api/clientes.details/${id}`)
                const data=response.data
                setNome(data.nome)
                setSobrenome(data.sobrenome)
                setEmail(data.email)
                setLoading(false)

            }
            GetApi()
        }
        
    })
    const Cadastrar= async()=>{

        const regexp1=/@(gmail|hotmail).com/gi
        if(nome.length<3){
            setErro('Nome vázio')
        }
        if(sobrenome.length<3){
            setErro('Sobrenome vázio')
        }
        else if(email.length===0){
            setErro("Email vázio")
        }
        else if( !email.match(regexp1)){
            setErro("Email não preenchido corretamente")
        }
        else if( senha.length<6){
            setErro("Senha no máximo de 9 caracteres")
        }
        else{
            setErro("")
            const data={
                nome,
                sobrenome,
                tipo,
                email,
                senha
            }
            console.log(data)
           const response= await Put.put(`/api/clientes/${id}`,data)
           if(response.status===200){
            window.location.href='/admin/clientes'
          }else{
            alert("Erro ao cadastrar Cliente")
          }
        }
    }
    return(
        <S.Cadastrar>
            <h1>Informe seus dados abaixo:</h1>

            <S.Form>
                <h4>Cadastro</h4>
                <span>{erro}</span>
                <S.FormControl>
                    <label>Nome:<span>*</span></label>
                    <input value={nome} onChange={e=>setNome(e.target.value)} type={'text'} required  name='Nome' placeholder='Digite seu nome' />
                    <label>Sobrenome:<span>*</span></label>
                    <input value={sobrenome} onChange={e=>setSobrenome(e.target.value)} required  type={'text'} name='Sobrenome' placeholder='Digite seu sobrenome' />
                </S.FormControl>
                <S.FormControl>
                    <label>Email:<span>*</span></label>
                    <input value={email} onChange={e=>setEmail(e.target.value)}  type={'email'} required name='Email' placeholder='Digite seu Email' />
                    <label>Senha:<span>*</span></label>
                    <input value={senha} onChange={e=>setSenha(e.target.value)}  type={ 'password'} name='Senha' required maxLength={9} placeholder='Digite seu Senha...'/>
                </S.FormControl>
                <S.FormControl>
                    <label>Tipo:</label>
                    <select required  onClick={(e)=>setTipo(e.target.value)}>
                        <option>-</option>
                        <option value={2}>Cliente</option>
                        <option value={1}>Administrador</option>
                    </select>
                </S.FormControl>
              <button onClick={Cadastrar}>Cadastrar</button>
            </S.Form>
        </S.Cadastrar>
    )
}