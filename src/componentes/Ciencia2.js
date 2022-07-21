import React, { Component } from 'react';
import Ciencia1 from './Ciencia1'

class Ciencia2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.Ciencia.map(Ciencia => (
                    <Ciencia1
                    key = {Ciencia.url}
                    Ciencia = {Ciencia}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Ciencia2;