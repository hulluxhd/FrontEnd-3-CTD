import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss"
import img2 from "../../assets/2.jpg"
function Header() {
    return (
        <div className="header">
            <div className="header-espaco-salvo">
                <img src={img2} id='img2'></img>
            </div> {/* !DECIDIR */}
            <ul className="header-sub">
                <a href="#"><li className="header-item">About me</li></a>
                <a href="#"><li className="header-item">Projetos</li></a>
                <a href="#"><li className="header-item">Contato</li></a>
            </ul>

        </div>
    );

}

export default Header;
