import './styles/Credit.css';
import React from 'react';


export default function Credit({ text }) {
    return (
        <div className='Credit'>
            <a href='https://caiuamello.com' target='blank'>{text} <span>Dev. Mello Softwares</span></a>
        </div>
    )
}