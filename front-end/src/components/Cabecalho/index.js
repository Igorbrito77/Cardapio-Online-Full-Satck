import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiUser} from 'react-icons/fi';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import logoImg from '../../assets/castor.png';

import './styles.css'

// import api from '../../services/api';


function Cabecalho(){

    const usuario_id = localStorage.getItem('usuario_id');
    const usuario_nome = localStorage.getItem('usuario_nome');

    async function logout(){
        
        localStorage.setItem('usuario_id', 0);
        localStorage.setItem('usuario_email', '');
        localStorage.setItem('usuario_nome', 'deslogado');

        window.location.href = '/';

        // localStorage.clear();
        // history.push('/');
    }

    const [aberto, setAberto] = useState(false);

    const toggleMenu = () => {
        setAberto(!aberto);
    };



    useEffect( () =>{

    }, []);

    return (
        <div className = "cabecalho">
            <header  style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>

                <img id= "logo" src={logoImg} alt = "Shop"/>
                          
                          
                <div className="usuario-menu">
                    <button className="botao-usuario" onClick={toggleMenu}>
                        <span className="icone-usuario"></span>
                        <FiUser/>
                        <strong>{usuario_nome}</strong>
                    </button>
                    
                    {aberto && (
                        <div className="menu-dropdown">
                        <button className="opcao-dropdown" onClick={logout}>Logout</button>
                        </div>
                    )}
                </div>


            </header>

        </div>
    );
}

export default Cabecalho; 