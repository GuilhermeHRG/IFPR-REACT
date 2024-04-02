import React from "react";
import './style.css';

export default function Palestrantes() {
    return (
        <div className="main">
            <div className="title">
                <h1>Palestrantes</h1>
            </div>
            <div className="logosPalestrantes">
                <div className="card1">
                    <img src="https://sm.ign.com/t/ign_br/feature/t/the-15-bes/the-15-best-nicolas-cage-movies_q32j.1280.jpg" alt="a" />
                    <h3>nicolas cage</h3>
                    <p>Sem comentários... Apenas Nicolas Cage</p>
                </div>
                <div className="card2">
                    <img src="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2.jpg" alt="a" />
                    <h3>elon musk</h3>
                    <p>Criou ré no foguete... Muito foda</p>
                </div>
                <div className="card3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexjCcRtVZ1dQkezoQHh-uX3XYE6P6n3cx6Lj4AG6k1A&s" alt="a" />
                    <h3>chuck norris</h3>
                    <p>As lágrimas dele criaram as jóias do infinito</p>
                </div>
                
            </div>
            <div className="button">
            <button className="cronogramaButton">Cronograma</button>
            </div>
        </div>
    );
}
