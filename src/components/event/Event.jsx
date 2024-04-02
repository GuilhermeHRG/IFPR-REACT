import React from "react";
import '../event/style.css';

export default function Event() {
    return (
        <div id="evento" className="section">
            <h1>Sobre o evento</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores unde consequatur expedita odio voluptatibus, at adipisci, ex similique illo voluptas iusto repudiandae omnis? Eius incidunt laboriosam adipisci facilis necessitatibus.</p>
            <div className="detalhes">
            <img className="image" src="https://media.istockphoto.com/id/1270632735/pt/foto/model-of-atom-and-elementary-particles-physics-concept-3d-rendered-illustration.jpg?s=612x612&w=0&k=20&c=u_XPDraYzX9d35a6nyFsk3wIILOT7YKzp4ksWVDZ-dw=" alt="img1" />
            <ul>
                <li><span class="list-icon"></span>Evento Gratuito</li>
                <li><span class="list-icon"></span>Com Certificado </li>
                <li><span class="list-icon"></span>Para todas as idades</li>
                <button className="subscribeButton">Inscreva-se</button>
            </ul>

                
            </div>
            
        </div>
    );
}
