import React, { Component } from 'react';
import Header3 from './Header3'
import Negocio2 from './Negocio2'


///https://www.youtube.com/watch?v=kBs0fspJiA8
///https://www.youtube.com/watch?v=tocWDvPUkeI

class Negocio extends Component {

  state = {
    negocio : []
    }
  
    componentDidMount(){
     this.consultaNegocio();
  }

  consultaNegocio = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=3f4f35bb84524b1fb7e4aecb8db050b5';
    


    fetch (url)
    .then(respuesta =>{
      return respuesta.json();
    })

    .then(negocio =>{
      console.log(negocio)
      this.setState({
        negocio: negocio.articles
      })
    })

  }
  render (){

    return (
      
      
      <div className = "App">
          <Header3 />
          <div className="container">
          <Negocio2 negocio = {this.state.negocio}/>
          </div>
        
      </div>


    )
  }
}

export default Negocio;
