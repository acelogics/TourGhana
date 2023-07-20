import React from 'react'
import './Home.css'
import { BsFillBagFill } from 'react-icons/bs'
import { FaGlobeAmericas, FaRegHandshake } from 'react-icons/fa'



const Cta = () => {
    return (
        <>
            <div className='row header' style={{
                minHeight: `70vh`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundImage: `linear-gradient(rgba(1, 26, 54, 0.947), rgba(4, 9, 30, 0.7)), url("./tools/abt.jpg")`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                marginBottom: `4em`,
                marginTop: `4em`


            }}>
                <div className="text-center text-light">
                    <div id="t-1" className='mt-5 fw-bold' >Why Choose Us</div>
                    <p id="t-3" >A LEADING BRAND YOU CAN TRUST AND RELY ON</p>

                    <div className='row mt-5 gy-sm-4 justify-content-center' >
                        <div className='col-md-4'
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            data-aos-once="false"
                        >
                            <BsFillBagFill size="6em" color="blue" style={{ padding: "25px", backgroundColor: "white", borderRadius: "3em" }} />
                            <h3>Affordable Price Guarantee</h3>
                            <p className=''>Travel without breaking the bank! <br></br> Start exploring the world on a budget</p>
                        </div>

                        <div className='col-md-4'
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-once="false"
                        >
                            <FaGlobeAmericas size="6em" color="blue" style={{ padding: "25px", backgroundColor: "white", borderRadius: "3em" }} />
                            <h3>Wide Variety of destinations</h3>
                            <p>From exotic getaways to cultural hotspots<br></br> Discover new horizons, explore dream locations. </p>

                        </div>

                        <div className='col-md-4'
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-once="false">
                            <FaRegHandshake size="6em" color="blue" style={{ padding: "25px", backgroundColor: "white", borderRadius: "3em" }} />
                            <h3>HIghly Qualified Service</h3>

                            <p>Sense quality at every step of your journey.<br></br> Travel with confidence and peace of mind. </p>

                        </div>
                    </div>


                </div>

            </div >

        </>
    )
}

export default Cta