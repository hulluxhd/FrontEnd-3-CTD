import React from 'react';
import "./style.scss"
import img1 from "../../assets/1.jpg"
export default function About() {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                <div className="about imagem">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dirceuresende.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fcropped-web-development-banner-1024x427.jpg&f=1&nofb=1" alt="" id='img1' />
                </div>
                <div className="about me">
                    <h2>Denny Ribeiro</h2>
                    <p>Desenvolvedor FullStack</p>
                    <p>Graduando de economia que busca se integrar ao mercado de tecnologia. Atualmente estou finalizando a graduação enquanto participo do Certified Tech Developer como bolsista da escola de tecnologia Digital House.</p>
                    <p>Conhecimentos em:</p>
                    <p>Front-end</p>
                    <p>Back-end </p>
                    <p>Infra</p>
                    <p>Testing</p>
                </div>
            </div>
        </div>
    )
}