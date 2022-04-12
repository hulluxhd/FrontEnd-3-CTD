import React from 'react'

export default function ClassComponent(props) {

    // destructuring

    const [teste1, teste2] = props

    const nomes = [
        { nome: "Nicolas" },
        { nome: "Pedro" },
        { nome: "Carolina" },

    ]
    return (
        <>
        {console.log(props.teste1)} // utilizando o objeto props
        {console.log(props.teste2)} // utilizando o objeto props

        {console.log(teste1)} // utilizando o destructuring
        {console.log(teste2)} // utilizando o destructuring
        












            <p>
                Convidados:
            </p>

            <ul>
                {nomes.map((value, i) => {
                    return <li key={i.toString()}>{value.nome}</li>
                })
                }
            </ul>

        </>
    )
}