import React from 'react';
import './Grid.css'



const Ciencia1 = (props) => {

    const {url, author, description, title, urlToImage} = props.Ciencia;
    
    return(


        <div className="col-md-3">
        
        <div class="border border-primary">
        <div class="card">
        <div class="row">
        <div class="card-deck">
             <img src={urlToImage} alt={title} className="card-img-top" />
             <span className="card-title">{author}
             </span>
             <div className="card-body">
                 <h5 className="card-title-justify">{title}</h5>
                 <p className="card-text-center">{description}</p>
            
                 <a href={url} className="btn btn-outline-primary" >leer Mas</a>

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
     
    )
}

export default Ciencia1;