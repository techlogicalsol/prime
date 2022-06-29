import React from 'react'
import DisplayCard from './DisplayCard'
import DisplayData from './DisplayData'

function Display(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    
                    {DisplayData.map((val, ind) =>{
                        return<DisplayCard
                                key={ind}
                                heading1={val.heading1}
                                heading4={val.heading4}
                                photo={val.photo}

                        />
                    })}
                    </div>
                </div>
            </div>
        
    )
}

export default Display