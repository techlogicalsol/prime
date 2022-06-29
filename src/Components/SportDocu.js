import React from 'react'
import SdocuData from './SdocuData'

function SportDocu() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"><strong>Sports Spotlight</strong>t</h1>
                <p className="text-muted text-center">
                    Catch up on this year’s Sports Emmy Award-winning documentaries, series
                    and specials.
            </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                         <div className="row">

                            {SdocuData.map((val) => {
                                return (
                                    <div className="col-md-4 mb-3">

                                        <div className="card sportEffect">
                                            <img src={val.photo} className="docuImg" />
                                            <div className="card-body docuBody">
                                                <h5 className="card-title">{val.title}</h5>
                                                <h6 className="card-title">{val.name}</h6>
                                                <p className="card-text text-muted">{val.info}</p>
                                                <button className="btn btn-info myButton">Watch Online</button>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SportDocu