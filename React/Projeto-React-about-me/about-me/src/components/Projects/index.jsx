import React from 'react';
import ReactDOM from 'react-dom';
import Cards from '../Cards';
import { projects } from "../Data/index"
import "./style.scss"
export default function Projects() {




    return (
        <>
            <h2 className='projects-h2'>Projects</h2>
            <div className="projects">
                <div className="projects-wrapper">
                    {projects.map((proj => <Cards key={proj.nome} projeto={proj} />))}
                </div>
            </div>
        </>

    )
}