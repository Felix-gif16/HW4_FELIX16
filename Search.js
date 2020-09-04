import React, { useEffect } from 'react';
import './css/layout.css'
import './css/components.css'
import './css/global.css'
import './css/main.css'


export default function Search(props){
   
    return(
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

    );
}