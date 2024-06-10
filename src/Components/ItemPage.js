import React, { useState } from 'react';
import './styles/ItemPage.css';
import { formatNumber, checkStatus } from '../utils/utils';

export default function ItemPage(props) {
    const { item } = props;

    const [valorPedido, setValorPedido] = useState(item.VALOR);

    const handleInputChange = (event) => {
        const { value, checked } = event.target;
        const valorItem = parseFloat(value); // Converta o valor do input para um número
        const valorAtualizado = checked ? valorPedido + valorItem : valorPedido - valorItem;

        // Verifique se o valor atualizado é maior que zero para evitar valores negativos
        if (valorAtualizado >= 0) {
            setValorPedido(valorAtualizado);
        }
    };

    return (
        <div className='ItemPage'>
            <div className='ItemPageContent'>
                <div className='content-inical'>
                    <img alt='itemIMAGE' src={item.IMAGEM} />
                </div>

                <div className='itemInfo'>
                    <h1 className='itemInfo-name'>{item.NOME}</h1>
                    <h1 className='itemInfo-desc'>{item.DESCRICAO}</h1>
                    <h1 className='itemInfo-valor'>R$ {formatNumber(item.VALOR)}</h1>
                </div>

                <div className='bottom-aditional-items'>
                    <h2 className='aditionais-box-titleGeral'>TURBINE SEU PEDIDO</h2>
                    <div className='item-adicionais-disponiveis'>
                        <div className='adicional-box'>
                            <div className='input-aditional-info-box'>
                                <input type='checkbox' value={10} onChange={handleInputChange} />
                                <p>ADICIONAL 1</p>
                            </div>

                            <div className='value-aditional-info-box'>
                                <p>R$ 10,00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='valorPedido'>
                    <h4>Valor do Pedido: </h4>
                    <h4>R$ {formatNumber(valorPedido)}</h4>
                </div>
            </div>
        </div>
    );
}
