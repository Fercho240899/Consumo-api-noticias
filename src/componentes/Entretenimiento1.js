import React from 'react';

const Entretenimiento1 = (props) => {

    const {url, author, description, title, urlToImage} = props.entretenimiento;
    
    return(
     <div className="col-md-3">
         <div class="border border-success">
         <div className="card-header">
             
         
             <img src={urlToImage} alt={title} className="card-img-top" />
             <span className="card-title">{author}
             </span>
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <a href={url} className="btn btn-outline-success">leer Mas</a>

            </div>
            </div>
        </div>
     </div>
    )
}

export default Entretenimiento1;