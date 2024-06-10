import React, { useState, useEffect } from "react";
import './styles/LocalPage.css';
import Item from "./Item";
import { formatNumber, checkStatus } from '../utils/utils';
import ItemPage from "./ItemPage";

export default function LocalPage(props) {
    const { img, bebidas, comidas, localInfo, adicionais } = props;

    const [opend, setOpend] = useState(true);
    const [OpcoesAllMenu, setOpcoesAllMenu] = useState(0);
    const [nomesOpcoes, setNomesOpcoes] = useState([]);
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (localInfo) {
            setOpend(checkStatus(localInfo.ATENDIMENTO_INICIO, localInfo.ATENDIMENTO_FIM) === 'Aberto');
        }
    }, [localInfo]);

    useEffect(() => {
        if (comidas && typeof comidas[0] === 'object') {
            setOpcoesAllMenu(Object.keys(comidas[0]).length);
            const nomes = [];
            Object.entries(comidas[0]).forEach(([key, array]) => {
                nomes.push(key);
            });
            setNomesOpcoes(nomes);
        } else {
            console.log("comidas[0] is not an object or is undefined.");
        }
    }, [comidas]);

    const opendClass = opend ? 'opend' : 'closed';

    const handleDropdownClick = (index) => {
        setDropdownIndex((prevIndex) => {
            if (prevIndex === index) {
                return null;
            } else {
                setSelectedItem(null); // Remova o item selecionado ao fechar a seção
                return index;
            }
        });
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="LocalPage">
            {selectedItem && <ItemPage item={selectedItem} onClose={() => setSelectedItem(null)} adicionais={adicionais} />}
            <div className="info-header">
                <div className="container-general">
                    <div className="logo-container">
                        <img className="logo-img" src={img} alt="Logo" />
                    </div>
                    <div className="cartLink">
                        <img src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/cart-shopping-svgrepo-com.png?alt=media&token=29ea243e-369d-428c-b027-60b4276b68b5" alt="Cart" />
                    </div>
                </div>
                <div className="nome-and-info">
                    <p className="title">{localInfo && localInfo.NOME}</p>
                    <div className="ver-mais-container">
                        <a href="#">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="open-time-order">
                <div className="order-time open-time-order-geral">
                    <div className="icon-box">
                        <img className="excecao1" src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/delivery-scooter-svgrepo-com%20(1).svg?alt=media&token=ec11fef0-6c80-4924-955c-f7fa1edfb41a" alt="Delivery Icon" />
                    </div>
                    <a href='#'>Ver tempo e taxa de entrega</a>
                </div>
                <div className="min-order open-time-order-geral">
                    <div className="icon-box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/cart-svgrepo-com.svg?alt=media&token=0acd3f89-527a-431b-9954-e458bcb226a2" alt="Cart Icon" />
                    </div>
                    Pedido mínimo: R$ {localInfo ? formatNumber(localInfo.PEDIDO_MINIMO) : '0,00'}
                </div>
                <div className="open-time open-time-order-geral">
                    <div className="icon-box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/clock_icon.png?alt=media&token=5588ca9b-5fe9-4333-8a90-38e3ca5804dd" alt="Clock Icon" />
                    </div>
                    <span className={opendClass}>{localInfo ? checkStatus(localInfo.ATENDIMENTO_INICIO, localInfo.ATENDIMENTO_FIM) : 'Fechado'}</span>
                </div>
            </div>

            <div className="Promotions">
                <button>VEJA AS PROMOÇÕES</button>
            </div>
            <div className="items">
                <div className="item-section">
                    {nomesOpcoes.map((nomeOpcao, index) => (
                        <div key={index} className={`sectionName drop-btn ${dropdownIndex === index ? 'active' : ''}`}>
                            <p className="title-section" onClick={() => handleDropdownClick(index)}>
                                {nomeOpcao}
                                <div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/dropdown-arrow-svgrepo-com.svg?alt=media&token=ed4f2e48-2e8f-4899-8ff7-b9ff6ef13905" alt="Dropdown" />
                                </div>
                            </p>
                            {dropdownIndex === index && (
                                <div className="item-section-options">
                                    {comidas && comidas[0] && comidas[0][nomeOpcao] && comidas[0][nomeOpcao].map((item, itemIndex) => (
                                        <Item
                                            key={itemIndex}
                                            nome={item.NOME}
                                            desc={item.DESCRICAO}
                                            valor={item.VALOR}
                                            img={item.IMAGEM}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleItemClick(item); // Passa o item para a função handleItemClick
                                            }}
                                        />

                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
