import React from 'react'

function Cards(props) {
    return (
        
                <div className="col-md-3 col-10 mx-auto mb-4">
                    <div className="card cardEffect">
                    <img src={props.photo} className="myphoto" />
                    <div className="card-body MWeek">
                        <h6 className="card-title">{props.name}</h6>
                        <p className="card-text">
                            {props.title}
                        </p>

                        <a href={props.link} target="_blank" className="btn btn-warning">Watch Now</a>
                    </div>
                </div>
                </div>
      
    )
}

export default Cards