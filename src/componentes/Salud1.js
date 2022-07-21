import React from 'react';

const Salud1 = (props) => {

    const {url, author, description, title, urlToImage} = props.salud;
    
    return(
     <div className="col-md-3">
         <div class="border border-primary">
         <div className="card-header">
         
             <img src={urlToImage} alt={title} className="card-img-top" />
             <span className="card-title">{author}
             </span>
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <a href={url} className="btn btn-outline-primary">leer Mas</a>

            </div>
            </div>
        </div>
     </div>
    )
}

export default Salud1;