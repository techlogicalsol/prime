import React from 'react'
import PodData from './PodData'

function Pod() {
    return (
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-md-10 main_pod mx-auto">

                    <img src={PodData[0].photo} className="podImg" />
 

                    <div className="podText">
                    
                        <h3>{PodData[0].title}</h3>
                        <h3>{PodData[0].subtitle}</h3>
                        <p>{PodData[0].info}</p>
                        <button className="btn btn-info">LISTEN NOW</button>
                    </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Pod