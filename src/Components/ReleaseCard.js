import React from 'react'

function ReleaseCard(props) {
    return (
        <div className="col-md-4 col-10 mx-auto mb-4">
            <div className="card releaseEffect">
                <img src={props.photo} className="releasePhoto"/>
                <div className="card-body card_color">
                    <h5>{props.title}</h5>
                    <p>{props.buy}</p>
                    
                    <a href={props.link} target="_blank" className="btn btn-info">Watch Now</a>
                </div>
            </div>
        </div>
    )
}

export default ReleaseCard