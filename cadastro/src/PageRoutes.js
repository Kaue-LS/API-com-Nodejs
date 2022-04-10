import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import AdminRoute from './Services/AdminRoutes'
import Cliente from './Pages/Cliente'
import Editar from './Pages/ADM/Editar'
import Deletar from './Pages/ADM/Deletar'
import PrivateRoute from './Services/PrivateRoute';
import React from 'react'
import Termos from '../src/Components/Termos/Termos'
import Inicio from './Pages/Início'
import Cadastrar from './Pages/Cadastrar'
import LogIn from './Pages/Login'
import Lista from './Pages/ADM/Lista'
export default function PageRoutes(){
    return(
        <>
          {/* Rotas publicas */}
          <Routes >
          <Route  path='/cadastrar' element={<Cadastrar/>}/>
          <Route  path='/login' element={<LogIn/>}/>
          <Route index path='/' element={<Inicio></Inicio>}/>
          <Route   path='*' element={<NotFound></NotFound>}/>
          <Route  path='/termos' element={<Termos/>}/>
        {/* -------------------------------------------------- */}
       
       {/* Rotas Privadas */}
          <Route index path='/cliente' element={<PrivateRoute><Cliente/></PrivateRoute>}/>
          <Route index path='/admin/clientes' element={<AdminRoute><Lista/></AdminRoute>}/>
          <Route index path='/admin/deletar/:id' element={<AdminRoute><Deletar/></AdminRoute>}/>
          <Route index path='/admin/editar/:id' element={<AdminRoute><Editar/></AdminRoute>}/>
      </Routes>
      </>
    )
}