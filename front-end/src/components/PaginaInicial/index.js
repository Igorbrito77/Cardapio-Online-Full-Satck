import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
// import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import Cabecalho from '../Cabecalho';
import { FaArrowLeft } from 'react-icons/fa';

function PaginaInicial(){
   
    // const history = useHistory();

    const [proteinasApi, setProteinasApi] = useState([]);
    const [acompanhamentosApi, setAcompanhamentosApi] = useState([]);
    const [bebidasApi, setBebidasApi] = useState([]);
    const [sobremesasApi, setSobremesasApi] = useState([]);

    const dataAtual = new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    useEffect( () =>{

        const usuario_id = localStorage.getItem('usuario_id');
        if(!usuario_id || usuario_id == 0){
            alert('Você precisa fazer o login para acessar essa página.');
            window.location.href = '/';
        }


        api.get('alimento', {
        }).then(response =>{     
            // setProdutos(response.data);         
            console.log(response.data);

            setProteinasApi(response.data.filter(item => item.categoria_nome === 'Proteína'));
            setAcompanhamentosApi(response.data.filter(item => item.categoria_nome === 'Acompanhamento'));
            setBebidasApi(response.data.filter(item => item.categoria_nome === 'Bebida'));    
            setSobremesasApi(response.data.filter(item => item.categoria_nome === 'Sobremesa'));
        })

    }, []);


    let proteina_anterior_id = null, bebida_anterior_id = null, sobremesa_anterior_id = null;

    const [itens_selecionados_nomes, set_itens_selecionados_nomes] = useState(null);


    const [proteinaSelecionada, setProteinaSelecionada] = useState(null);

    function handleProteina(id){

        proteina_anterior_id = proteinaSelecionada;
        setProteinaSelecionada(id);
    }

    const [acompanhamentosSelecionados, setAcompanhamentosSelecionados] = useState([]);

    function handleAcompanhamentos(id){

        if(acompanhamentosSelecionados.includes(id))      
            setAcompanhamentosSelecionados(acompanhamentosSelecionados.filter(item => item !== id));            

        else
            setAcompanhamentosSelecionados([...acompanhamentosSelecionados, id]);
    }

    const [bebidaSelecionada, setBebidaSelecionada] = useState(null);

    function handleBebida(id){

        bebida_anterior_id = bebidaSelecionada;
        setBebidaSelecionada(id);
    }

    const [sobremesaSelecionada, setSobremesaSelecionada] = useState(null);

    function handleSobremesa(id){

        sobremesa_anterior_id = sobremesaSelecionada;
        setSobremesaSelecionada(id);
    }

    

    const [itensSelecionadosIds, setItensSelecionadosIds] = useState([]);

    function handleItensSelecionadosIds(id, tipo){

        if(tipo == 'proteina'){
                
            let array_aux = itensSelecionadosIds.filter(item => item !== proteina_anterior_id);
            array_aux.push(id);

            setItensSelecionadosIds(array_aux);            
        }

        else if (tipo == 'acompanhamento'){

            if(itensSelecionadosIds.includes(id))      
                setItensSelecionadosIds(itensSelecionadosIds.filter(item => item !== id));            

            else
                setItensSelecionadosIds([...itensSelecionadosIds, id]);
        }


        else if (tipo == 'bebida'){
                
            let array_aux = itensSelecionadosIds.filter(item => item !== bebida_anterior_id);
            array_aux.push(id);

            setItensSelecionadosIds(array_aux);            
        }

        else if (tipo == 'sobremesa'){
                
            let array_aux = itensSelecionadosIds.filter(item => item !== sobremesa_anterior_id);
            array_aux.push(id);

            setItensSelecionadosIds(array_aux);            
        }

    }

    
    function adicionarItem(item, tipo) {

        switch (tipo) {
            case 'bebida':
                handleBebida(item.id);
                break;
            case 'acompanhamento':
                handleAcompanhamentos(item.id);         
                break;
            case 'proteina':
                handleProteina(item.id);
                break;
            case 'sobremesa':
                handleSobremesa(item.id);
                break;
            default:
                console.error('Tipo de item desconhecido:', tipo);
                return;
        }

        handleItensSelecionadosIds(item.id, tipo); // pra enviar os ids pra api
    }


    ///////////////////////////////////////////////////////

    function exibir_modal_confirmacao(){
        
        const todos_itens = proteinasApi.concat(acompanhamentosApi).concat(bebidasApi).concat(sobremesasApi);

        if(itensSelecionadosIds.length === 0) {
            alert('Nenhum item selecionado. Por favor, selecione pelo menos um item.');
            return;
        }

        let itens_selecionados_nomes_aux = todos_itens.map( item => {

            if(itensSelecionadosIds.includes(item.id)){
                return item.nome;
            }
        });

        itens_selecionados_nomes_aux = itens_selecionados_nomes_aux.filter(item => item !== undefined);

        console.log("itens_selecionados_nomes_aux ===> ", itens_selecionados_nomes_aux);

        set_itens_selecionados_nomes(itens_selecionados_nomes_aux);

        setShowModal(true)
    }



    const [showModal, setShowModal] = useState(false);

    function confirmar_pedido() {

        // Salva o pedido na API
        const usuario_id = localStorage.getItem('usuario_id');

        const pedido = {
            usuario_id: usuario_id,
            alimento_ids: itensSelecionadosIds
        };
        
        api.post('pedido', pedido)
            .then(response => {
                console.log('Pedido salvo com sucesso:', response.data);
            })
            .catch(error => {
                console.error('Erro ao salvar o pedido:', error);
                alert('Erro ao salvar o pedido. Tente novamente mais tarde.');
            });


        setShowModal(false);
        setShowPedidoFinalizado(true);
    }

    
    const [showPedidoFinalizado, setShowPedidoFinalizado] = useState(false);

    function voltar_tela_inicio() {

        setShowPedidoFinalizado(false);


        // Salvando itens da sessão no localStorage
        const itens_sessao = itens_selecionados_nomes || [];

        const itens_storage = localStorage.getItem('itens_pedido') ? JSON.parse(localStorage.getItem('itens_pedido')) : [];

        const itens_atualizados = itens_storage.concat(itens_sessao);

        localStorage.setItem('itens_pedido', JSON.stringify(itens_atualizados));


        // Salvando usuários que já fizeram o pedido do dia
        const usuarios_pedido = localStorage.getItem('usuarios_pedido') ? JSON.parse(localStorage.getItem('usuarios_pedido')) : [];
        const usuario_id = localStorage.getItem('usuario_id');
        const usuarios_atualizados = [...usuarios_pedido, usuario_id];
        localStorage.setItem('usuarios_pedido', JSON.stringify(usuarios_atualizados));


        window.location.href = '/pedidos';
    };

    
    function redirecionar_lista(){
        window.location.href = '/pedidos'
    }

    return (
        <div>
            <Cabecalho />

            <div className="pagina-inicial-container">

               <button id ="botao_volta" className="botao-novo-pedido-2" onClick={redirecionar_lista}>
                    <span className="icone"></span>                    
                    <FaArrowLeft />
                    
                </button>


                <h1>Monte sua refeição ({dataAtual})</h1>
                         
                <h2><u>Acompanhamentos</u></h2>
                <ul>
                    {acompanhamentosApi.map((acompanhamento) => (

                        <li key={acompanhamento.id}>
                        
                            <button className="button" onClick={() => adicionarItem(acompanhamento, 'acompanhamento')  }>

                                <img
                                    src={acompanhamento.foto_url}
                                    alt={acompanhamento.nome}
                                    className={acompanhamentosSelecionados.includes(acompanhamento.id) ? 'img-selecionada' : ''}
                                />
                                
                                <strong>{acompanhamento.nome}</strong>

                                {/* <strong>
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(acompanhamento.preco)}
                                </strong> */}

                            </button>

                        </li>
                    ))}
                </ul>

                <h2><u>Proteínas</u></h2>
                <ul>
                {proteinasApi.map((proteina) => (
                    <li key={proteina.id}>
                    <button className="button" onClick={() => adicionarItem(proteina, 'proteina')  }>
                        <img
                            src={proteina.foto_url}
                            alt={proteina.nome}
                            className={proteinaSelecionada === proteina.id ? 'img-selecionada' : ''}
                        />
                        <strong>{proteina.nome}</strong>

                        <strong>
                        {/* {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(proteina.preco)} */}
                        </strong>
                    </button>
                    </li>
                ))}
                </ul>

                <h2><u>Bebidas</u></h2>
                <ul>
                    {bebidasApi.map((bebida) => (

                        <li key={bebida.id}>
                        
                            <button className="button" onClick={() => adicionarItem(bebida, 'bebida')  }>

                                <img
                                    src={bebida.foto_url}
                                    alt={bebida.nome}
                                    className={bebidaSelecionada === bebida.id ? 'img-selecionada' : ''}
                                />
                                
                                <strong>{bebida.nome}</strong>

                                {/* <strong>
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(bebida.preco)}
                                </strong> */}

                            </button>

                        </li>
                    ))}
                </ul>


                <h2><u>Sobremesas</u></h2>
                <ul>
                    {sobremesasApi.map((sobremesa) => (

                        <li key={sobremesa.id}>
                        
                            <button className="button" onClick={() => adicionarItem(sobremesa, 'sobremesa')  }>

                                <img
                                    src={sobremesa.foto_url}
                                    alt={sobremesa.nome}
                                    className={sobremesaSelecionada === sobremesa.id ? 'img-selecionada' : ''}
                                />
                                
                                <strong>{sobremesa.nome}</strong>

                                {/* <strong>
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(sobremesa.preco)}
                                </strong> */}

                            </button>

                        </li>
                    ))}
                </ul>

            </div>


            <div className="finalizar-pedido">
                <button className="button" onClick={() => exibir_modal_confirmacao()}>
                                            Finalizar Pedido

                    {/* <Link to="/pedido" className="button">
                    </Link> */}
                </button>
            </div>
            

             {showModal && (
                <div style={styles.overlay}>

                    <div style={styles.modal}>

                        <h2 style={styles.title}>Seu pedido</h2>


                        <h3>Acompanhamentos: </h3> {
                            
                            acompanhamentosSelecionados.length === 0 ?
                                '-' 
                                :
                                acompanhamentosSelecionados.map(id => {
                                    const acompanhamento = acompanhamentosApi.find(item => item.id === id);
                                    return acompanhamento ? acompanhamento.nome : '';
                                }).join(', ')
                        
                        }

                        <br />
                        <br />

                        <h3>Proteína: </h3> {proteinasApi.find(item => item.id === proteinaSelecionada)?.nome || '-'}
                        <br />
                        <br />
                        
                        <h3>Bebida: </h3> {bebidasApi.find(item => item.id === bebidaSelecionada)?.nome || '-'}
                        <br />
                        <br />
                        
                        <h3>Sobremesa: </h3> {sobremesasApi.find(item => item.id === sobremesaSelecionada)?.nome || '-'}


                        <div style={{ ...styles.footer, justifyContent: "center" }}>
                            <button onClick={() => confirmar_pedido()} style={styles.confirmButton}>
                                Confirmar
                            </button>
                        </div>

                        <button onClick={() => setShowModal(false)} style={styles.closeButton}>
                            &times;
                        </button>
                    </div>
                </div>
            )}

            { showPedidoFinalizado && (
                <div style={styles.overlay}>

                    <div style={styles.modal}>

                        <h2 style={styles.title}>Pedido Finalizado! </h2>

                        <div style={{ ...styles.footer, justifyContent: "center" }}>
                            <button onClick={() => voltar_tela_inicio()} style={styles.confirmButton}>
                                OK
                            </button>
                        </div>

                    </div>
                </div>
            )}


            


        </div>
    );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    position: "relative",
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "35px",
    marginBottom: "16px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "none",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "16px",
  },
  confirmButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  closeButton: {
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#666",
  },
};



export default PaginaInicial; 