
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from 'react-bootstrap';
import Salud from './componentes/Salud'
import Deporte from './componentes/Deporte'
import Entretenimiento from './componentes/Entretenimiento'
import Negocio from './componentes/Negocio'
import Tecnologia from './componentes/Tecnologia'
import Ciencia from './componentes/Ciencia'
import Jikan from './componentes/Jikan'
import Goku from './componentes/Goku'

class App extends Component {
  
  render (){

    return (
        <Router> 
    
<Navbar bg="dark" variant="dark" >
    <Nav className="mr-auto ">
      <Nav.Link href ='http://localhost:3000/Salud' >SALUD</Nav.Link>
      <Nav.Link href='http://localhost:3000/Deporte'>DEPORTE</Nav.Link>
      
      <Nav.Link href ='http://localhost:3000/Entretenimiento' >ENTRETENIMIENTO</Nav.Link>
      <Nav.Link href='http://localhost:3000/Negocio'>NEGOCIO</Nav.Link>
      
      <Nav.Link href ='http://localhost:3000/Jikan' >NARUTO</Nav.Link>
      <Nav.Link href='http://localhost:3000/Goku'>DRAGON BALL Z</Nav.Link>
      
      <Nav.Link href ='http://localhost:3000/Tecnologia' >TECNOLOGIA</Nav.Link>
      <Nav.Link href='http://localhost:3000/Ciencia'>CIENCIA</Nav.Link>

    </Nav>
    <Form inline>
      
    </Form>
  </Navbar>
                 <Switch>
                     <Route path="/Salud">
                        <Salud />
                     </Route>

                     <Route path="/Deporte">
                        <Deporte />
                     </Route>

                     <Route path="/Entretenimiento">
                        <Entretenimiento />
                     </Route>

                     <Route path="/Negocio">
                        <Negocio />
                     </Route>

                     <Route path="/Jikan">
                        <Jikan />
                     </Route>

                     <Route path="/Goku">
                        <Goku />
                     </Route>

                     <Route path="/Tecnologia">
                        <Tecnologia />
                     </Route>

                     <Route path="/Ciencia">
                       <Ciencia />
                     </Route>
      
                 </Switch>
        </Router> 

    )
  }
}

export default App;
