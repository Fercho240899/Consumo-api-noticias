import React, { Component } from 'react';
import Goku1 from './Goku1'

class Goku2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.Goku.map(Goku => (
                    <Goku1
                    key = {Goku.url}
                    Goku = {Goku}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Goku2;