import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
// import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/icon.png';

import './styles.css'
import Cabecalho from '../Cabecalho';
import { TbUxCircle } from 'react-icons/tb';
import { FaReceipt  } from 'react-icons/fa'; // Ícone de recibo
import { MdFastfood } from 'react-icons/md'; // Ícone de recibo

function ListaPedido(){
   
    // const history = useHistory();

    const [acompanhamentosApi, setAcompanhamentosApi] = useState([]);
    const [pedidosApi, setPedidosApi] = useState([]);

    const [usuario_nome, setUsuarioNome] = useState([]);



    useEffect( () =>{

        setUsuarioNome( localStorage.getItem('usuario_nome'));

        const usuario_id = localStorage.getItem('usuario_id');
        if(!usuario_id || usuario_id == 0){
            alert('Você precisa fazer o login para acessar essa página.');
            window.location.href = '/';
        }


        api.get(`pedido/${usuario_id}`, {
        }).then(response =>{     
            // setProdutos(response.data);         
            console.log(response.data);

            setPedidosApi(response.data);

            // setAcompanhamentosApi(response.data.filter(item => item.categoria_nome === 'Acompanhamento'));
        })

    }, []);


    let proteina_anterior_id = null, bebida_anterior_id = null, sobremesa_anterior_id = null;

    const [itens_selecionados_nomes, set_itens_selecionados_nomes] = useState(null);


    const [acompanhamentosSelecionados, setAcompanhamentosSelecionados] = useState([]);

    function handleAcompanhamentos(id){

        if(acompanhamentosSelecionados.includes(id))      
            setAcompanhamentosSelecionados(acompanhamentosSelecionados.filter(item => item !== id));            

        else
            setAcompanhamentosSelecionados([...acompanhamentosSelecionados, id]);
    }


  

    function redirecionar_lista(){
        window.location.href = '/lista'
    }


    return (

        <div>
            <Cabecalho />

            <div className="lista-pedido-container">

                <button className="botao-novo-pedido-2" onClick={redirecionar_lista}>
                    <span className="icone"></span>
                    Novo Pedido
                </button>


                {/* <h2> Pedidos anteriores <FaReceipt /></h2> */}

                {/* <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Pedidos anteriores <FaReceipt />
                </h2> */}


                <h2> Pedidos anteriores <MdFastfood /></h2>
                {/* <h2> Pedidos anteriores <FaShoppingBag /></h2>
                <h2> Pedidos anteriores <FaClipboardList /></h2>
                <h2> Pedidos anteriores <HiOutlineReceiptRefund /></h2> */}



                <table className="tabela-refeicoes">
                    <thead>
                        <tr>
                        <th>Número</th>
                        <th>Data</th>
                        <th>Refeição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidosApi.map((pedido) => (
                                    <tr key={pedido.id}>
                                        <td>{pedido.numero}</td>
                                        <td>
                                            {new Date(pedido.data).toLocaleDateString('pt-BR', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            })}
                                        </td>
                                        <td>{pedido.alimentos.map(alimento => alimento.nome).join(', ')}</td>
                                    </tr>
                                ))}
                    </tbody>
                </table>

            </div>


        </div>
    );
}


export default ListaPedido; 