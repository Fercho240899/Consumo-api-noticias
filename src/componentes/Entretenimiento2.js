import React, { Component } from 'react';
import Entretenimiento1 from './Entretenimiento1'

class Entretenimiento2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.entretenimiento.map(entretenimiento => (
                    <Entretenimiento1
                    key = {entretenimiento.url}
                    entretenimiento = {entretenimiento}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Entretenimiento2;