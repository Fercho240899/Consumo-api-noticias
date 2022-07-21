import React, { Component } from 'react';
import Header8 from './Header8'
import Goku2 from './Goku2'

class Goku extends Component {

    state = {
      Goku : []
      }
    
      componentDidMount(){
       this.consultaGoku();
    }
  
    consultaGoku= () => {
      let url = 'https://api.jikan.moe/v3/search/anime?q=Dragonball';
      
  
  
      fetch (url)
      .then(respuesta =>{
        return respuesta.json();
      })
  
      .then(Goku =>{
        console.log(Goku)
        this.setState({
          Goku: Goku.results
        })
      })
  
    }
    render (){
  
      return (
        
        
        <div className = "App">
            <Header8 />
            <div className="container">
            <Goku2 Goku = {this.state.Goku}/>
            </div>
          
        </div>
  
  
      )
    }
  }
  
  export default Goku;