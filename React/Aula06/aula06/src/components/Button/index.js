import React from 'react'
import "./style.css"

export default function Button(props) {
    return (
        <button className={props.btn}>{props.text}</button>
    )
}
