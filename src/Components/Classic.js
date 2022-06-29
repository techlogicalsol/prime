import React from 'react'
import ClassicCard from './ClassicCard';
import ClassicData from './ClassicData';


function Classic() {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Classic Movies</h1>
            </div>

            <div className="container-fluid mb-5 my_container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">

                

                  
                {ClassicData.map((val, ind) => {
                    return <ClassicCard
                        key={ind}
                        photo={val.photo}
                        title={val.title}
                        rated={val.rated}
                        info={val.info}
                        link={val.link}
                    />
                })
                }
                      </div>

                    </div>
                    </div>
                    </div>
                </div>
                
    )
}


export default Classic