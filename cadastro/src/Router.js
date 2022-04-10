import {BrowserRouter} from 'react-router-dom'
import PageRoutes from './PageRoutes'
import './App.css'
import React from 'react'
import NavBarRoutes from './NavBarRoutes'



export default function Rotas(){

    return(
      <div className={'app'}>
        <BrowserRouter>
        <NavBarRoutes></NavBarRoutes>
        <PageRoutes></PageRoutes>
        </BrowserRouter>
      </div>
    )
}