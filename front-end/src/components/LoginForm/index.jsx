import React, {useState, useEffect} from 'react';
import './styles.css';
// import {Link, useHistory} from 'react-router-dom';

// import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/castor.png';


export default function Logon(){

    
    const[email, setEmail] = useState(''); 
    const[senha, setSenha] = useState(''); 
    // const history = useHistory('');


    useEffect( () =>{


        // const usuario_id = localStorage.getItem('usuario_id');
        // if(!usuario_id || usuario_id == 0){
        //     alert('Você precisa fazer o login para acessar essa página.');
        //     window.location.href = '/';
        // }


        // api.get('user', {
        // }).then(response =>{     
        //     // setProdutos(response.data);         
        //     console.log(response.data);

        //     // setProteinasApi(response.data.filter(item => item.categoria_nome === 'Proteína'));
        //     // setAcompanhamentosApi(response.data.filter(item => item.categoria_nome === 'Acompanhamento'));
        //     // setBebidasApi(response.data.filter(item => item.categoria_nome === 'Bebida'));    
        //     // setSobremesasApi(response.data.filter(item => item.categoria_nome === 'Sobremesa'));
        // })

    }, []);
    

    async function realizar_login(e){
        e.preventDefault(e);

        try{

               
            const login = await api.post(`user/login`, {email, senha});
            console.log(login.data);


            // const usuario_encontrado = combinacoes.find(combinacao =>
            //     combinacao.email === email && combinacao.senha === senha
            // );


            let msg = 'Acesso Negado. Tente novamente.';

            if(login.data.code === 0){
                
                // const usuarios_pedido = localStorage.getItem('usuarios_pedido') ? JSON.parse(localStorage.getItem('usuarios_pedido')) : [];

                // verificar se o usuário já fez o pedido do dia
                // const usuarioJaFezPedido = usuarios_pedido.some(usuario_id => usuario_id == usuario_encontrado.id);
                // if(usuarioJaFezPedido){
                //     msg = 'Você já fez o pedido do dia. Volte amanhã!';
                //     alert(msg);
                //     return;
                // }                
                
                msg = 'Acesso Aprovado. Bem-vindo(a)!';


                // verificar se ele já fez o pedido do dia
                localStorage.setItem('usuario_id', login.data.user_id);
                localStorage.setItem('usuario_nome', login.data.user_name);
                localStorage.setItem('usuario_email', email);


                window.location.href = '/pedidos';
            }

            // const usuario = (await api.post('login', {email, senha} )).data;

            // localStorage.setItem('usuario_id', usuario.usuario_id);
            // localStorage.setItem('usuario_email', email);
            
           
        //    history.push('/inicio');


           
           alert(msg)
        }
        catch(err){
            alert('Falha no Login. Tente de novo.');
        }
    }


    return (
        <div className="logon-container">
            <img src = {logoImg} alt = 'Heroes'/>

            <section className="form">
                {/* <img src= {logoImg} alt="Shop Store"/> */}
                
                <form onSubmit = {realizar_login}>
                    <h1>Faça seu login</h1>

                    <input placeholder = 'email'
                            value = {email}
                            onChange= {e => setEmail(e.target.value)}
                    />

                    <input placeholder = 'senha'
                            type = 'password'
                            value = {senha}
                            onChange= {e => setSenha(e.target.value)}
                    />

                    <button className= "button" type= "submit">Entrar</button>
                    
                
                    {/* <Link className = "back-link" to = "/cadastro-usuario"> */}
                        {/* <FiLogIn size= {16} color = "#E02041"/> */}
                        Não tenho cadastro
                    {/* </Link> */}

                </form>
            
            </section>
        </div>
    );
}