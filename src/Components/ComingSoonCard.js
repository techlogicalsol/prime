import React from 'react'

function ComingSoonCard(props) {
    return (
        <div className="col-md-4 col-10 mx-auto mb-4">
            <div className="card soonEffect">
                <img src={props.photo} className="comingsoon" />
                <div className="card-body comingcolor">
                    <p>{props.Rdate}</p>
                    <h5 className="card-title">{props.title}</h5>
                    <p id="coming">{props.info}</p>
                    <a href={props.link} target="_blank" className="btn btn-outline-info">
                    <i class="fa fa-play"></i> Watch</a>
                </div>
            </div>
        </div>
    )
}

export default ComingSoonCard