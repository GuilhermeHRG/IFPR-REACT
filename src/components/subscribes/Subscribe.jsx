import React, { useState } from "react";
import './style.css';

export default function Subscribe() {
    // Definir estados para os campos de entrada
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para algum lugar, como um servidor, por exemplo
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        // Você também pode adicionar validações ou outras lógicas aqui
    };

    return (
        <><div className="title">
            <h1>Inscrições</h1>
        </div><div className="mainSub">

                <div className="subscribe">
                    <div className="cardSub">
                        <h4>Faça sua inscrição!!</h4>
                        <p>Não perca essa oportunidade.</p>
                        {/* Formulário de cadastro */}
                        <form onSubmit={handleSubmit}>
                            {/* Campo Nome */}
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required />
                            {/* Campo Email */}
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            {/* Campo Telefone */}
                            <label htmlFor="telefone">Telefone:</label>
                            <input
                                type="tel"
                                id="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required />
                            {/* Botão de envio */}
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="cardSub">
                    <h3>Informações</h3>
                    <p>Acesse nossas redes sociais</p>
                    <div className="redesLogo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />
                        <img src="https://www.designi.com.br/images/preview/10000484.jpg" alt="" />
                    </div>
                </div>
                </div>
                
            </div></>
    );
}
