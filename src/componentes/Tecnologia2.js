import React, { Component } from 'react';
import Tecnologia1 from './Tecnologia1'

class Tecnologia2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.Tecnologia.map(Tecnologia => (
                    <Tecnologia1
                    key = {Tecnologia.url}
                    Tecnologia = {Tecnologia}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Tecnologia2;