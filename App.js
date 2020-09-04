import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Container from './Components/Container';
import Header from './Components/Header';
import Sample from './Components/Sample-wallpaper';

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <div>
      <Container H={'Hulk'} M={'Mavel'} V={'Venom'}/>
      </div>
      <div>
        <Header title={"Mavel's Fearless"} subtitle={" Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae molestias earum eveniet."}/>
      </div>
      <div>
      <Search />
    </div>
    <div >
      <Sample Wallpaper={require('./Components/img/venom-1.jpg')} Wallpaper1={require('./Components/img/hulk-1.jpg')} Wallpaper2={require('./Components/img/venom-2.jpg')}/>
    </div>

    </div>
    
  );
}

export default App;
