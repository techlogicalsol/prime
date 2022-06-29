import React from 'react'
import ComingSData from './ComingSData'
import ComingSoonCard from './ComingSoonCard'

function ComingSoon(){
    return(

    <>
    <div className="my-5">
        <h1 className="text-center">Coming Soon</h1>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                    {ComingSData.map((val, ind) => {
                        return<ComingSoonCard
                        key={ind}
                        photo={val.photo}
                        Rdate={val.Rdate}
                        title={val.title}
                        info={val.info} 
                        link={val.link}
                        />
                    })
                }
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default ComingSoon