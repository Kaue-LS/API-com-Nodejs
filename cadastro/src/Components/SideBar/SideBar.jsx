import { useState } from "react";
import { Link } from "react-router-dom";
import { Get } from "../../Services/Api";
import {  getToken, Logout } from "../../Services/Auth";
import * as S from "./Styled";
export default function SideBar() {
  const [open,setOpen]=useState('arrow_back_ios')
  console.log(open)

  const OpenBar=(props)=>{
      if(props==='arrow_back_ios'){
        document.getElementById('SideBar').style=`
        margin:0 0rem;
        transition:400ms linear;
        `
      setOpen(props)
     
      }
      else{
        document.getElementById('SideBar').style=`
        margin:0 -15rem;
        transition:400ms linear;
        `
        setOpen(props)
        
      }

  }
  const Sair = async () => {
    if (window.confirm("Deseja realmente sair do Sistema")) {
      const response = await Get.get("/api/clientes/destroyToken", {
        headers: { token: getToken() },
      });
      if (response.status === 200) {
        Logout();
        window.location.href = "/";
      } else {
        alert("Não foi possível fazer o logout!");
      }
    }
  };
  return (
    <S.SideBar id="SideBar">
      <S.Logo>
       
          <h1>Painel do Administrador</h1>
       
      </S.Logo>
      <S.Buttons>
        <nav>
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#ffffff" }}
                to={"/admin/clientes"}
              >
                Clientes
              </Link>
            </li>
            <li style={{ cursor: "pointer" }} onClick={() => Sair()}>
              LogOut
            </li>
          </ul>
        </nav>
      </S.Buttons>
      <S.Exit>
        <span onClick={()=>OpenBar(open==='arrow_back_ios'?'arrow_forward_ios':'arrow_back_ios')} className="material-icons">{open}</span>
      </S.Exit>
    </S.SideBar>
  );
}
