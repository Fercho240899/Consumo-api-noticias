import React, { Component } from 'react';
import Header6 from './Header6'
import Ciencia2 from './Ciencia2'
import './Grid.css';

class Ciencia extends Component {

    state = {
      Ciencia : []
      }
    
      componentDidMount(){
       this.consultaCiencia();
    }
  
    consultaCiencia= () => {
      let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=science&apiKey=3f4f35bb84524b1fb7e4aecb8db050b5';
      
  
  
      fetch (url)
      .then(respuesta =>{
        return respuesta.json();
      })
  
      .then(Ciencia =>{
        console.log(Ciencia)
        this.setState({
          Ciencia: Ciencia.articles
        })
      })
  
    }
    render (){
  
      return (

        
        <div className = "App">
            <Header6 />
            <div className="container">
            <Ciencia2 Ciencia = {this.state.Ciencia}/>
            </div>
          
        </div>
  
      )
    }
  }
  
  export default Ciencia;