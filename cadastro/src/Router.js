import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import Inicio from './Pages/Início'
import Cadastrar from './Pages/Cadastrar'
import LogIn from './Pages/Login'
import Clientes from './Pages/Clientes'
import './App.css'
import Editar from './Pages/Editar'
import Deletar from './Pages/Deletar'
import PrivateRoute from './Services/PrivateRoute'

export default function Rotas(){
    return(
        <BrowserRouter>
        <SideBar></SideBar>
        <NavBar></NavBar>
        <div className='routes'>
        <Routes >
            <Route index path='/' element={<Inicio></Inicio>}/>
            <Route index path='/cadastrar' element={<Cadastrar/>}/>
            <Route index path='/login' element={<LogIn/>}/>
            <Route  element={<PrivateRoute></PrivateRoute>}>
                <Route path='/admin/clientes' element={<Clientes/>}/>
                <Route path='/admin/editar/:id' element={<Editar/>}/>
                 <Route path='/admin/deletar/:id' element={<Deletar/>}/>
            </Route>
        </Routes>
        </div>
        </BrowserRouter>
    )
}