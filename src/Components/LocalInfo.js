import React, { useState } from "react";
import './styles/LocalInfo.css'
import Item from "./Item";

export default function LocalInfo(props) {

    const { img, nome, min_order } = props;

    const [maisVendidos, setMaisVendidos] = useState(false)
    const [tacos, setTacos] = useState(false)

    const taco_chili = 'https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/taco-chilli.jpeg?alt=media&token=80f73db3-c335-47da-befc-c499ba5bb367';

    const nome_est = 'Nome do Item';
    const desc_est = 'Tortilla de milho crocante, recheada com chili, sour cream, guacamole, alface, pico de gallo (vinagrete) e cheddar.'
    const valor_est = '00,00'


    const handleClickDrop = (op) => {

        switch (op) {
            case 'mais vendidos':
                setMaisVendidos(!maisVendidos)
                break;
            case 'tacos':
                setTacos(!tacos);
            default:
                break;
        }
    }

    return (
        <div className="LocalInfo">
            <div className="info-header">
                <div className="container-general">
                    <div className="logo-container">
                        <img className="logo-img" src={img} alt="Logo" />
                    </div>
                </div>
                <div className="nome-and-info">
                    <p className="title">{nome}</p>
                    <div className="ver-mais-container">
                        <div className="icon-container">
                            <img className="icon" src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/food_icon.png?alt=media&token=2aded721-335d-4345-8c55-610060878c86" alt="Estabelecimento de comida" />
                        </div>
                        <a href="#">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="open-time-order">
                <div className="open-time open-time-order-geral">
                    <div className="icon-box ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/clock_icon.png?alt=media&token=5588ca9b-5fe9-4333-8a90-38e3ca5804dd" alt="Clock Icon" />
                    </div>
                    <span className="opend">Aberta</span>
                </div>
                <div className="order-time open-time-order-geral">
                    <div className="icon-box">
                        <img className="excecao1" src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/delivery-scooter-svgrepo-com%20(1).svg?alt=media&token=ec11fef0-6c80-4924-955c-f7fa1edfb41a" alt="Delivery Icon" />
                    </div>
                    <a href='#'>Ver tempo e taxa de entrega</a>
                </div>
                <div className="min-order open-time-order-geral">
                    <div className="icon-box ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/corrida-9e963.appspot.com/o/cart-svgrepo-com.svg?alt=media&token=0acd3f89-527a-431b-9954-e458bcb226a2" alt="Cart Icon" />
                    </div>
                    Pedido mínimo: R$ {min_order}
                </div>
            </div>
            <div className="search-area">
                <input placeholder="Pesquise aqui" />
            </div>
            <div className="items">
                <div className="item-section">
                    <div className="sectionName drop-btn" onClick={() => { handleClickDrop('mais vendidos') }}>
                        <p className="">Mais Vendidos</p>
                    </div>
                    <div className={maisVendidos ? 'mais-vendidos-section' : 'd-none'}>
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                    </div>

                    <div className="sectionName drop-btn" onClick={() => { handleClickDrop('tacos') }}>
                        <p className="">Tacos</p>
                    </div>
                    <div className={tacos ? 'tacos-section' : 'd-none'}>
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                        <Item nome={nome_est} desc={desc_est} valor={valor_est} img={taco_chili} />
                    </div>
                </div>
            </div>
        </div>
    )
}
