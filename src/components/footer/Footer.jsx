import React from 'react';
import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="logo"></div>
                <div className="dev">
                    
                        <p>Copyrigth &copy; Guilherme Guelere {new Date().getFullYear()} Todos os direitos reservados</p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
