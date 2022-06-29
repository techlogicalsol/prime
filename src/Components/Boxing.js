import React from 'react'
import BoxingData from './BoxingData';

function Boxing() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 col_Box1">
                    <img src="images/mybox.jpg" className="myboxImg" />
                </div>
                <div className="col-md-4 col_Box2">
                    <h2>{BoxingData[0].title}</h2>
                    <p className="text-black-50">{BoxingData[0].info}</p>
                    <button className="btn btn-outline-info btn_Box">FIND OUT MORE</button>
                </div>
                </div>
                </div>
            
    
    )
} 

export default Boxing