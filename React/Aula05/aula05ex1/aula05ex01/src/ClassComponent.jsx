import React, { Component } from 'react'

export default class ClassComponent extends Component {
     nomes = [
        { nome: "Nicolas", tarefa: "batata-frita" },
        { nome: "Pedro", tarefa: "pizza" },
        { nome: "Carolina", tarefa: "bebidas" },
    ]
    render() {
        return (
            <>
                <p>Tarefas</p>
                <ul>
                    {this.nomes.map((value, i) => {
                        return <li key={i.toString()}>{value.nome} trará {value.tarefa}</li>
                    })}
                </ul>
            </>
        )
    }
}

