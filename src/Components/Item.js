import './styles/Item.css';
import React from 'react';
import { formatNumber } from '../utils/utils';

export default function Item(props) {
    const { nome, desc, valor, img, onClick } = props;

    return (
        <div className='Item' onClick={onClick}>
            <div className='item-content'>
                <div className='text'>
                    <h4 className='item-name'>{nome}</h4>
                    <h5 className='item-desc'>{desc}</h5>
                    <h2 className='item-valor'>R$ {formatNumber(valor)}</h2>
                </div>

                <div className='item-img-box'>
                    <img src={img} alt={nome} />
                </div>
            </div>
        </div>
    )
}
