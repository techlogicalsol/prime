import React from 'react'
import ReleaseCard from './ReleaseCard'
import ReleaseData from './ReleaseData'

function NewRelease(){
    return(
        <div>
            <div className="my-5">
                <h1 className="text-center">New Releases</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {ReleaseData.map((val, ind) =>{
                                return<ReleaseCard 
                                        key={ind}
                                        photo={val.photo}
                                        title={val.title}
                                        buy={val.buy}
                                        link={val.link}
                                
                                />
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewRelease