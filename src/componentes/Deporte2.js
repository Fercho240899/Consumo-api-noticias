import React, { Component } from 'react';
import Deporte1 from './Deporte1'

class Deporte2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.deporte.map(deporte => (
                    <Deporte1
                    key = {deporte.url}
                    deporte = {deporte}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Deporte2;