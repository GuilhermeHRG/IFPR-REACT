import React from "react";
import './style.css';

export default function Oficinas() {
    return (
        <div className="main">
            <div className="title">
                <h1>Oficinas</h1>
            </div>
            <div className="oficinas">
                <button className="cardButton">Voltar</button>
                <div className="card">
                <p>Como derrubar um jato com apenas UM chute</p>
                <img src="https://moviment0.files.wordpress.com/2009/10/roundhouse-kick-chuck-norris.jpg?w=435" alt="logo 1" />
                <h3>chuck norris</h3>
                <p>09/04/2024 - 19:00</p>
                </div>
                <div className="card">
                <p>Comportamento humano em Androids com Machine Learning</p>
                <img src="https://img.odcdn.com.br/wp-content/uploads/2023/05/Elon-Musk.png" alt="logo 1" />
                <h3>elon musk</h3>
                <p>05/04/2024 - 19:30</p>
                </div>
                <button className="cardButton">Próximo</button>
            </div>
        </div>
    );
}
