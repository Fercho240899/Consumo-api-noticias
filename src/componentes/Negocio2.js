import React, { Component } from 'react';
import Negocio1 from './Negocio1'

class Negocio2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.negocio.map(negocio => (
                    <Negocio1
                    key = {negocio.url}
                    negocio = {negocio}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Negocio2;