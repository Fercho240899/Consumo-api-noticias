import React, { Component } from 'react';
import Header4 from './Header4'
import Jikan2 from './Jikan2'

class Jikan extends Component {

    state = {
      Jikan : []
      }
      componentDidMount(){
       this.consultaJikan();
    }
    consultaJikan= () => {
      let url = 'https://api.jikan.moe/v3/search/anime?q=naruto';
      
      fetch (url)
      .then(respuesta =>{
        return respuesta.json();
      })
      .then(Jikan =>{
        console.log(Jikan)
        this.setState({
          Jikan: Jikan.results
        })
      })
    }
    render (){
      return (
        <div className = "App">
            <Header4 />
            <div className="container">
            <Jikan2 Jikan = {this.state.Jikan}/>
            </div>
        </div>
      )
    }
  }
  export default Jikan;