import React from 'react';

const Jikan1 = (props) => {

    const {url, author, synopsis, title, image_url} = props.Jikan;
    
    return(
     <div className="col-md-3">
         <div class="border border-warning">
         <div className="card-header">
             
         
             <img src={image_url} alt={title} className="card-img-top" />
             <span className="card-title">{author}
             </span>
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{synopsis}</p>
                 <a href={url} className="btn btn-outline-warning">leer Mas</a>

            </div>
            </div>
        </div>
     </div>
    )
}

export default Jikan1;