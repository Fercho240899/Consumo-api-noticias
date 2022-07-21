import React from 'react';

const Negocio1 = (props) => {

    const {url, author, description, title, urlToImage} = props.negocio;
    
    return(
       
     <div className="col-md-3">
         <div className="card">
         <div class="border border-info">
             <img src={urlToImage} alt={title} className="card-img-top" />
             <span className="card-title">{author}
             </span>
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <a href={url} className="btn btn-outline-info">leer Mas</a>

            </div>
        </div>
        </div>
     </div>
    )
}

export default Negocio1;