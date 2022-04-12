import React from 'react';
import ReactDOM from 'react-dom';

export default function Body(props) {
    return (
        <>
            {props.obj.map((value, i) => {
                return (
                    <ul key={value.id}>
                        <h1>{value.nome}</h1>
                        <li>Idade: {value.idade}</li>
                        <li>Sexo: {value.sexo}</li>
                        <li>Tamanho: {value.tamanho}</li>
                    </ul>
                )
            })
            }

        </>
            )
}