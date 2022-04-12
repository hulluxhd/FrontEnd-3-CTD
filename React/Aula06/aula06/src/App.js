import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Button from './components/Button';
import "./style.css"
export default function App() {



    return (
        <>
            <header className="header">
                <input className="input" />
                <div className="header_container">
                    <Button btn="btn1" text="Adicionar"/>
                    <Button btn="btn2" text="Limpar"/>
                </div>
            </header>
        </>
    )
}
