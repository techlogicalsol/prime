import React from 'react'
import {NavLink} from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="container-fluid my_footer">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1 className="text-center">FOLLOW NETFLIX</h1>


                        <div className="row">
                            <div className="col-md-4 mx-auto mb-3 media_footer">
                                <i className="fa fa-facebook-square"></i>
                                <i className="fa fa-pinterest-square"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-youtube-play"></i>
                                <i className="fa fa-instagram"></i>
                            </div>

                            <div className="col-md-10 mx-auto mb-3 link_footer">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">ABOUT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">WAYS TO GET</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">FAQ</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">SHOP</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">INSPIRES</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">CAREERS</a>
                                    </li>

                                   
                                </ul>
                            </div>

                            <div className="col-md-10 mx-auto">
                                <p className="text-center text-muted">
                                © 2020 Home Box Office, Inc. All Rights Reserved.
                                <br />
                                Powered by TECHLOGEX Solutions, developed by Amar Shabbir.
                                </p>
                               
                                    
                               
                            </div>
                        </div>




                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer