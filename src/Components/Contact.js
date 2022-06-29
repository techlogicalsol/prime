import React, { useState } from 'react'

function Contact() {

    const [data, setData] = useState({

        fullname: '',
        phone: '',
        email: '',
        msg: ''

    }); 


    const InputEvent = (event) =>{
        const{name, value} = event.target;

        setData((preVal) =>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    } 


    const formSubmit = (e) =>{
        e.preventDefault();

        alert(
            `My name is ${data.fullname}, My mobile number is ${data.phone},
            My email is ${data.email} and here is my message ${data.msg}`
        )
    };


    return (

        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-md-10 mx-auto">

                        <form onSubmit={formSubmit}>
                            <div className="form-outline mb-4">
                            <label className="form-label" for="form4Example1">Full Name:</label>
                                <input
                                    type="txt"
                                    id="form4Example1"
                                    className="form-control"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your full name"
                                />
                                
                            </div>

                            <div className="form-outline mb-4">
                            <label className="form-label" for="form4Example1">Phone:</label>
                                <input
                                    type="number"
                                    id="form4Example1"
                                    className="form-control"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number"
                                />
                                
                            </div>

                            <div className="form-outline mb-4">
                            <label className="form-label" for="form4Example2">Email Address:</label> 
                                <input
                                    type="email"
                                    id="form4Example1"
                                    className="form-control"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                />
                                
                            </div>


                            <div class="form-outline mb-4">
                                <label for="comment">Comment:</label>
                                <textarea 
                                className="form-control" 
                                rows="5" 
                                id="form4Example3" 
                                name="msg"
                                value={data.value}
                                onChange={InputEvent}
                                >
                                
                                </textarea>
                            </div>

                            <button type="submit" 
                            className="btn btn-success btn-block mb-4">
                                Send
                        </button>

                        </form>
                    </div>
                </div>
            </div>


            

        </>
    )
}

export default Contact