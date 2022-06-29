import React from 'react'


function DisplayCard(props) {
    return (
        
        <div>

          <div className="row">
            <div className="col-md-6 col_display">
                <h1>{props.heading1}</h1>
                <h4>{props.heading4}</h4>
            </div>

            <div className="col-md-6 col_display">
                <img src={props.photo} className="col_image"/>
            </div>
            </div>
           

        
            </div>
           
    )
}

export default DisplayCard