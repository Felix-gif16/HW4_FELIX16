import React from 'react';
import './css/layout.css'
import './css/components.css'
import './css/global.css'
import './css/main.css'

export default function Container(props){
    return(
        <nav className='navbar' >
            <div className='container'>
            <a href="#">{props.H}</a>
            <a href="#" class="logo is-active">{props.M}</a>
            <a href="#">{props.V}</a>

           </div>

        </nav>
    );
}