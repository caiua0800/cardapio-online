import React from "react";
import './styles/Header.css'

export default function Header({ src }) {
    return (
        <div className="Header">
            <img src={src}/>
        </div>
    )
}
