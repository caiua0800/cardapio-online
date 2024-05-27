import './styles/Item.css';
import React, { useState } from 'react';

export default function Item(props) {

    const { nome, desc, valor, img } = props;

    return (
        <div className='Item'>
            <div className='item-content'>
                <div className='text'>
                    <h4 className='item-name'>{nome}</h4>
                    <h5 className='item-desc'>{desc}</h5>
                    <h2 className='item-valor'>R${valor}</h2>
                </div>

                <div className='item-img-box'>
                    <img src={img} />
                </div>
            </div>

        </div>
    )
}