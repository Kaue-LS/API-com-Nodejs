import { Navigate, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Get } from "./Api";
import {getToken, Logout} from './Auth'
export default function PrivateRoute({component:Component,...rest}){
    const [auth,setAuth]=useState(false)

    useEffect(() => {
        async function verify(){
            const res = await Get.get('/api/clientes/checktoken', {params:{token:getToken()}});
            console.log(res)
            if(res.data.status===200){
                setAuth(true)
            }else{
                Logout();
                setAuth(false)
            }
        }
        // setTimeout(() => verify(),1000);
        verify();
    },[])
    return !auth? <Outlet/>:<Navigate to='/login'/>
}