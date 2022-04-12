import React from 'react';
import img from "../../assets/5.png"
import "./style.css"
function Cards(props) {
    const { projeto } = props
    { console.log(props) }
    return (
        <div className="projects-cards">
            <a target='_blank' href={projeto.url}>
                <img src={img} />
                <div className="projects-cards-text">
                    <h3>{projeto.nome}</h3>
                    <p>{projeto.desc}</p>
                </div>
            </a>
        </div>
    )
}


export default Cards