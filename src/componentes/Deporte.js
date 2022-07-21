import React, { Component } from 'react';
import Header1 from './Header1'
import Deporte2 from './Deporte2'
///https://www.youtube.com/watch?v=kBs0fspJiA8
///https://www.youtube.com/watch?v=tocWDvPUkeI
class Deporte extends Component {
  state = {
    deporte : []
    }
    componentDidMount(){
     this.consultaDeporte();
  }
  consultaDeporte= () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=sports&apiKey=3f4f35bb84524b1fb7e4aecb8db050b5';

    fetch (url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(deporte =>{
      console.log(deporte)
      this.setState({
        deporte: deporte.articles
      })
    })
  }
  render (){
    return (      
      <div className = "App">
          <Header1 />
          <div className="container">
          <Deporte2 deporte = {this.state.deporte}/>
          </div>
        
      </div>
    ) }}
export default Deporte;
