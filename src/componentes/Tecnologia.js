import React, { Component } from 'react';
import Header7 from './Header7'
import Tecnologia2 from './Tecnologia2'

class Tecnologia extends Component {

    state = {
      Tecnologia : []
      }
    
      componentDidMount(){
       this.consultaTecnologia();
    }
  
    consultaTecnologia= () => {
      let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=3f4f35bb84524b1fb7e4aecb8db050b5';
      
  
  
      fetch (url)
      .then(respuesta =>{
        return respuesta.json();
      })
  
      .then(Tecnologia =>{
        console.log(Tecnologia)
        this.setState({
          Tecnologia: Tecnologia.articles
        })
      })
  
    }
    render (){
  
      return (
        
        
        <div className = "App">
            <Header7 />
            <div className="container">
            <Tecnologia2 Tecnologia = {this.state.Tecnologia}/>
            </div>
          
        </div>
  
  
      )
    }
  }
  
  export default Tecnologia;