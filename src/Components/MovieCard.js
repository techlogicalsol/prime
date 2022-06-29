import React from 'react'
import DataCenter from './DataCenter'
import Cards from './Cards'

function MovieCard(){
    return(
        <div>
        <div className="my-5">
            <h1 className="text-center">Free Movies Of The Week</h1>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">

                        {DataCenter.map((val, ind) => {
                            return<Cards
                            key={ind}
                            photo={val.photo}
                            name={val.name}
                            title={val.title}
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

export default MovieCard