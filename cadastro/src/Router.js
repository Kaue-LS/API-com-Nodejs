import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from './Pages/Início'
import Cadastrar from './Pages/Cadastrar'
import LogIn from './Pages/Login'
import Lista from './Pages/ADM/Lista'
import './App.css'
import Editar from './Pages/ADM/Editar'
import Deletar from './Pages/ADM/Deletar'
import PrivateRoute from './Services/PrivateRoute';
import React from 'react'
import Termos from '../src/Components/Termos/Termos'
import NavBar from '../src/Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import { GetAdminClient} from './Services/Auth'
import NotFound from './Components/NotFound/NotFound'
import AdminRoute from './Services/AdminRoutes'
import Cliente from './Pages/Cliente'
import NavBarAdm from './Components/NavBar/NavBarAdm'
export default function Rotas(){
  const admin= JSON.parse( GetAdminClient())
    return(
        <BrowserRouter>
        {admin===null || admin===false?(
         <NavBar></NavBar>
       
        ):(
          <>
          <SideBar></SideBar>
          <NavBarAdm></NavBarAdm>
          </>
        )}
      
        
          <div className={'app'}>
        <Routes >
            <Route index path='/cadastrar' element={<Cadastrar/>}/>
            <Route index path='/login' element={<LogIn/>}/>
            <Route index path='/' element={<Inicio></Inicio>}/>
            <Route  element={<PrivateRoute/>}>
            <Route index path='/cliente' element={<Cliente/>}/>
            </Route>
            <Route  index path='*' element={<NotFound></NotFound>}/>
          {/* -------------------------------------------------- */}
         

            <Route  element={<AdminRoute/>}>
                <Route index path='/admin/clientes' element={<Lista/>}/>
            </Route>

            <Route  element={<AdminRoute/>}>
            <Route index path='/admin/deletar/:id' element={<Deletar/>}/>
            </Route>

            <Route  element={<AdminRoute/>}>
            <Route index path='/admin/editar/:id' element={<Editar/>}/>
            </Route>
            <Route index path='/termos' element={<Termos/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}