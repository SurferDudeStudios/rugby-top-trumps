import React,{useState,useEffect} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
//  console.log(players.Players);
//var i = 0;
//   for(i=0; i < players.Players.length; i++){
//     console.log(BuildPlayerCard(players.Players[i]));
//   };
  return (
    <div className="App">
      <Header></Header>
      <main>
       <div className='container clearfix'>
        <Cards></Cards>
       </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;