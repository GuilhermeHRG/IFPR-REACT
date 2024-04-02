import React from "react";
import '../header/style.css';

export default function Header() {
    return (
        <header className="headerContainer">
            <div className="headerMain">
                <div className="logo"></div>
                <div className="container">
                    <a href="#inicio" className="link">Inicio</a>
                    <a href="#evento" className="link">Evento</a>
                    <a href="#palestrantes" className="link">Palestrantes</a>
                    <a href="#oficinas" className="link">Oficinas</a>
                    <a href="#cronograma" className="link">Cronograma</a>
                    <a href="#inscricao" className="link">Inscrição</a>
                </div>
            </div>
        </header>
    );
}
