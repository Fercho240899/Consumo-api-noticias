import React, { Component } from 'react';
import Salud1 from './Salud1'

class Salud2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.salud.map(salud => (
                    <Salud1
                    key = {salud.url}
                    salud = {salud}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Salud2;