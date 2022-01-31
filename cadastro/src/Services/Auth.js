export const Token_Key='&app_token'
export const ID_Client='&id'
export const Nome_Client='&nome'
export const Admin_Client='&admin'

export const Logar = token=>{
    localStorage.setItem(Token_Key,token)

}
export const Logout=()=>{localStorage.clear()}

export const SetIdClient=id=>localStorage.setItem(ID_Client,id)
export const GetIdClient=()=>localStorage.getItem(ID_Client)

export const SetNomeClient=nome=>localStorage.setItem(Nome_Client,nome)
export const GetNomeClient=()=>localStorage.getItem(Nome_Client)

export const setAdminCliente = admin =>localStorage.setItem(Admin_Client,admin)
export const GetAdminClient = () => localStorage.getItem(Admin_Client)

export const getToken=()=>localStorage.getItem(Token_Key)