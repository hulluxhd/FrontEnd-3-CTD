import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body/Body'
export default function App() {
    const obj = [
        {
            id: 1,
            nome: "Pingo",
            idade: 11,
            sexo: "Macho",
            tamanho: "Grande"
        },
        {
            id: 2,
            nome: "Cristal",
            idade: 13,
            sexo: "Fêmea",
            tamanho: "Pequeno"
        },
        {
            id: 3,
            nome: "Bob",
            idade: 5,
            sexo: "Macho",
            tamanho: "Mediano"
        },
        {
            id: 4,
            nome: "Ninaaaaaaaaa",
            idade: 2,
            sexo: "Fêmea",
            tamanho: "Pequeno"
        }
    ]

    return (
        <Body obj={obj} />
    )
}