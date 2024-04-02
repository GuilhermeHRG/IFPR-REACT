import React from "react";
import './style.css';

export default function Parceiros() {
    return (
        <div className="main">
            <div className="title">
                <h1>Nossos parceiros</h1>
            </div>
            <div className="logosParceiros">
                <img src="https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-negocios-da-symbol_173356-259.jpg?size=626&ext=jpg" alt="logo 1" />
                <img src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89713.jpg" alt="logo 2" />
                <img src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89689.jpg" alt="logo 3" />
            </div>
        </div>
    );
}
