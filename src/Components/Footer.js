import React from 'react'
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';



import './Home.css'

const Footer = () => {
    return (
        <>
            <div id="footer">



                <div className='row my-4 gy-5'>
                    <div className='col-md-4 m-auto fw-bold px-3'>
                        <h3 className='fw-bolder' >Tour Ghana</h3>
                    </div>

                    <div className='col-md-4'>
                        <h4>About-Us</h4>
                        <p>
                            Introducing Travel Assistance, the unrivaled champion of travel and tour websites. With our cutting-edge technology, unbeatable expertise, and unmatched dedication, we redefine the way you experience the world.</p>
                    </div>

                    <div className='col-md-4'>
                        <h4>Follow-Us</h4>

                        <ImFacebook2 size="1.2em" className='mx-1' />
                        <GrInstagram size="1.2em" className='mx-1' />
                        <FaTwitterSquare size="1.3em" className='mx-1' />
                        <IoLogoYoutube size="1.4em" className='mx-1' />


                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer