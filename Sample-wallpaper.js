import React from 'react';
import './css/sample-wallpaper.css'
import './css/components.css'
import './css/global.css'
import './css/main.css'
import './css/layout.css'

export default function Sample(props){
    return(
        <div className="sample-wallpaper">
          <article className="wallpaper">
            <img src={props.Wallpaper} alt="Wallpaper" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src={props.Wallpaper1} alt="Wallpaper1" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src={props.Wallpaper2} alt="Wallpaper2" className="wallpaper" />
          </article>
        </div>
    );
}