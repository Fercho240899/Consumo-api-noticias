import React, { Component } from 'react';
import Header from './Header'
import Salud2 from './Salud2'

class Salud extends Component {
  state = {
    salud : []
    }
    componentDidMount(){
     this.consultaSalud();
  }
  consultaSalud = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=3f4f35bb84524b1fb7e4aecb8db050b5';

    fetch (url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(salud =>{
      console.log(salud)
      this.setState({
        salud: salud.articles
      })
    })
  }
  render (){
    return (
      <div className = "App">
          <Header />
          <div className="container">
          <Salud2 salud = {this.state.salud}/>
          </div>
        
      </div>
    )
  }
}
export default Salud;
