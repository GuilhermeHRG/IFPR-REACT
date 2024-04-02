import React from "react";
import './style.css';

export default function Main() {
    return (
        <div  id="inicio" className="sections">
            <div className="sectionA">
                <p>Semana de Física e Tecnologia</p>
                <p>Inscreva-se para participar</p>
                <button className="subscribeButton">Inscreva-se</button>
            </div>
            <div className="sectionB">
                <img className="sectionBimg" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-fisica-uma-ciencia-basica-que-explica-as-diversas-formas-interacao-entre-materia-energia-5bf84b0fbba71.jpg" alt="a" />
            </div>
        </div>
    );
}
