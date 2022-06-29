import React from 'react'




function ClassicCard(props) {
    return (

        <div className="col-md-3 mx-auto mb-3">

            <div className="card main_card">

                <div className="row">
                    <div className="col-md-6 classicEffect">
                        <img src={props.photo} className="classic_photo" />


                    </div>

                    <div className="col-md-6 px-4 mb-3">
                        <div className="card-block my_card">
                            <h5 class="card-title mt-2">{props.title}</h5>

                            <p class="card-text">{props.rated}</p>
                            <p class="card-text">{props.info}</p>
                            
                        </div>
                        <a href={props.link} target="_blank" className="btn btn-outline-danger btn_classic">Watch</a>
                    </div>

                    



                </div>
            </div>

           
        </div>



    )
}


export default ClassicCard