import React from 'react'
import './Home.css'
import { BsFillBagFill } from 'react-icons/bs'
import { FaGlobeAmericas, FaRegHandshake } from 'react-icons/fa'



const Testimonials = () => {
    return (
        <>
            <div className='row header' style={{
                minHeight: `50vh`,
                // backgroundSize: `cover`,
                // backgroundPosition: `center`,
                // backgroundImage: `linear-gradient(rgba(84, 107, 199, 0.7), rgba(4, 9, 30, 0.7)), url("./tools/Ghana.jpeg")`,
                // // display: `flex`,
                // justifyContent: `center`,
                // alignItems: `center`,
                marginBottom: `4em`,
                marginTop: `4em`


            }}>
                <div className="text-center text-dark">
                    <div id="t-1" className='mt-5 fw-bold' data-aos="fade-down"
                    >TESTIMONIALS</div>
                    <p id="t-3" data-aos="fade-down"

                    >WHAT OUR CUSTOMERS SAY ABOUT US</p>

                    <div className='row mt-5  gy-sm-4'>
                        <div className='col-md-4'
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                        >
                            <BsFillBagFill size="6em" color="blue" style={{ padding: "25px", backgroundColor: "white", borderRadius: "3em" }} />
                            <h3>The epitome of excellence!</h3>
                            <p>Tour Ghana surpassed all expectations with their highly qualified service.<br></br>#ExcellencePersonified #UnforgettableService</p>
                        </div>

                        <div className='col-md-4'
                            data-aos="zoom-in"
                            data-aos-duration="2000">
                            <FaGlobeAmericas size="6em" color="blue" style={{ padding: "25px", backgroundColor: "white", borderRadius: "3em" }} />
                            <h3>The best travel companion!</h3>
                            <p>Tour Ghana treated me like a VIP,<br></br> Their dedication and personalized approach made me feel valued and cared for.<br></br>#CustomerFirst #ExceptionalCare</p>

                        </div>

                        <div className='col-md-4'
                            data-aos="zoom-in"
                            data-aos-duration="1000">
                            <FaRegHandshake size="6em" color="blue" style={{ padding: "25px", backgroundColor: "white", borderRadius: "3em" }} />
                            <h3>"A life-changing experience!</h3>

                            <p>Tour Ghana made my travel dreams come true.<br></br> Every moment was unforgettable.<br></br>#DreamsDoComeTrue #LifeChangingJourney" </p>

                        </div>
                    </div>


                </div>

            </div >

        </>
    )
}

export default Testimonials