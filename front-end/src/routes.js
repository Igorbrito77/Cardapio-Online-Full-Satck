import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import LoginForm from './components/LoginForm';
// import CadastroUsuario from './components/CadastroUsuario';
import PaginaInicial from './components/PaginaInicial';
import ListaPedido from './components/ListaPedido';

export default function AppRoutes(){
     return(

        <BrowserRouter>
            <Routes>
                <Route path ='/' element={<LoginForm/>} />
                <Route path ='/pedidos' element={<ListaPedido/>} />
                <Route path ='/lista' element={<PaginaInicial/>} />
            </Routes>
        </BrowserRouter>
     
     );
}
