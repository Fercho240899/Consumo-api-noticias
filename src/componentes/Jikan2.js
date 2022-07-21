import React, { Component } from 'react';
import Jikan1 from './Jikan1'

class Jikan2 extends Component {
     render(){
        return(
            <div className="row">
                {this.props.Jikan.map(Jikan => (
                    <Jikan1
                    key = {Jikan.url}
                    Jikan = {Jikan}
                    />

                )
            )
        }
            </div>
        )
     }
}
export default Jikan2;