import React, { Component } from 'react';
import Header2 from './Header2'
import Entretenimiento2 from './Entretenimiento2'


///https://www.youtube.com/watch?v=kBs0fspJiA8
///https://www.youtube.com/watch?v=tocWDvPUkeI

class Entretenimiento extends Component {

  state = {
    entretenimiento : []
    }
  
    componentDidMount(){
     this.consultaEntretenimiento();
  }

  consultaEntretenimiento= () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=entertainment&apiKey=3f4f35bb84524b1fb7e4aecb8db050b5';
    


    fetch (url)
    .then(respuesta =>{
      return respuesta.json();
    })

    .then(entretenimiento =>{
      console.log(entretenimiento)
      this.setState({
        entretenimiento: entretenimiento.articles
      })
    })

  }
  render (){

    return (
      
      
      <div className = "App">
          <Header2 />
          <div className="container">
          <Entretenimiento2 entretenimiento = {this.state.entretenimiento}/>
          </div>
        
      </div>


    )
  }
}

export default Entretenimiento;
