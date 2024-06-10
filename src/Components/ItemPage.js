import React, { useState } from 'react';
import './styles/ItemPage.css';
import { formatNumber } from '../utils/utils';

export default function ItemPage(props) {
    const { item, onClose, adicionais } = props;

    const [valorPedido, setValorPedido] = useState(item.VALOR);
    const [checkedItems, setCheckedItems] = useState([]);

    const handleInputChange = (event, adicional) => {
        const { checked } = event.target;
        const valorItem = parseFloat(event.target.value);
        const valorAtualizado = checked ? valorPedido + valorItem : valorPedido - valorItem;

        if (valorAtualizado >= 0) {
            setValorPedido(valorAtualizado);
        }

        if (checked) {
            setCheckedItems([...checkedItems, adicional.NOME]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== adicional.NOME));
        }
    };

    const arrow_left = 'https://firebasestorage.googleapis.com/v0/b/cardapio-delivery-81d6f.appspot.com/o/assets%2Farrow-left-svgrepo-com.png?alt=media&token=847cdbbe-7a3c-440c-a738-18417195cedb';
    const pepper = 'https://firebasestorage.googleapis.com/v0/b/cardapio-delivery-81d6f.appspot.com/o/assets%2Fhot-pepper-svgrepo-com.svg?alt=media&token=e86b1be2-6032-493c-ae1b-c93598cf2b9b';

    return (
        <div className='ItemPage'>
            <div className='ItemPageContent'>
                <div className='getBackDiv'>
                    <button className='close-button' onClick={onClose}>
                        <img src={arrow_left} className='arrowBack' alt='arrow get back' />
                    </button>
                    <p>DESCRIÇÃO DO PEDIDO</p>
                </div>
                <div className='content-inical'>
                    <img alt='itemIMAGE' src={item.IMAGEM} />
                </div>
                <div className='itemInfo'>
                    <h1 className='itemInfo-name'>{item.NOME}</h1>
                    <h1 className='itemInfo-desc'>{item.DESCRICAO}</h1>
                    <h1 className='itemInfo-valor'>R$ {formatNumber(item.VALOR)}</h1>
                </div>

                <div className='pimentaEstilo'>
                    <div className='pimentaTipoTitle'>
                        <h6>VAI UMA PIMENTA?</h6>
                        <div className='pimenta-icon-box'>
                            <img src={pepper} alt='pepper icon' />
                        </div>
                    </div>

                    <div className='pimentaTIPO'>
                        <div className='tipo-input-box'>
                            <div>
                                <input type='radio' id='semPimenta' value='sem pimenta' name='pimenta' />
                                <label htmlFor='semPimenta'>Sem Pimenta</label>
                            </div>
                            <div>
                                <input type='radio' id='moderado' value='moderado' name='pimenta' />
                                <label htmlFor='moderado'>Moderado</label>
                            </div>

                            <div>
                                <input type='radio' id='intenso' value='intenso' name='pimenta' />
                                <label htmlFor='intenso'>Intenso</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottom-aditional-items'>
                    <h2 className='aditionais-box-titleGeral'>
                        TURBINE SEU PEDIDO
                    </h2>
                    <span className='bottomTitle'>Selecione no máximo 1</span>
                    <div className='item-adicionais-disponiveis'>
                        {adicionais.map((adicional, index) => (
                            <div key={index} className={`adicional-item ${checkedItems.includes(adicional.NOME) ? 'checked' : ''}`}>
                                <input
                                    type='checkbox'
                                    id={`adicional-${index}`}
                                    value={adicional.VALOR}
                                    className='custom-checkbox'
                                    onChange={(event) => handleInputChange(event, adicional)}
                                />
                                <label htmlFor={`adicional-${index}`} className='custom-checkbox-label'>
                                    {adicional.NOME} - R$ {formatNumber(adicional.VALOR)}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='valorPedido'>
                    <h4 className='footer-valorModal'>VALOR DO PEDIDO: </h4>
                    <h4 className='footerValorModalValue'>R$ {formatNumber(valorPedido)}</h4>
                    <button>
                        <img src={arrow_left} className='goCart' alt='go cart arrow' />
                    </button>
                </div>
            </div>
        </div>
    );
}
