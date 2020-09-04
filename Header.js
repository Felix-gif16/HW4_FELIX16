import React from 'react';
import './css/layout.css'
import './css/components.css'
import './css/global.css'
import './css/main.css'

export default function Header(props){
    return(
        <header className="header">
            <div className="container">
    <h1 className="title">{props.title}</h1>
             <p className="subtitle">
         {props.subtitle}
             </p>
            </div>
        </header> 

    )
}