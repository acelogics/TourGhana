import React from 'react'
import './Home.css'

const EmailBooked = () => {

    return (
        <>

            <div id="loading" style={{
                position: `fixed`,
                width: `100 %`,
                height: `100vh`,
                background: `#fff url("./tools/gif2.jpg") no- repeat center center`,
                zIndex: `99999`



            }}></div >


            <div id="booked">
                <p className="fs-4 text-center pt-5 text-light">Tour Ghana</p>

                <div className="d-flex justify-content-center align-items-center">


                    <div className="text-center shadow p-5 margin-top bg-light rounded shadow  h-50">

                        <h3>Thanks! You're booked.</h3>
                        <p>Thank you for choosing our travel and tour services! We are excited to confirm your <br></br>booking and assist you in creating
                            unforgettable memories. You will recieve a mail from us shortly</p>
                    </div>

                </div>

            </div>


        </>
    )
}

export default EmailBooked