import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { map } from '../assets/images';



const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_lkjue2b', 'template_8mxj1mt', form.current, '3Rk1apNGlZCzHlb5r')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                console.log("message sent successfully")
                alert("message sent successfully")

            }, (error) => {
                console.log(error.text);
            });
    };

    const styles = {
        border: '0',
        height: "400px",
        width: "100%"


    }
    return (
        <>


            <div>

                <div className='row header' style={{
                    minHeight: `50vh`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundImage: `linear-gradient(rgba(84, 107, 199, 0.7), rgba(4, 9, 30, 0.7)), url(${map})`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    marginBottom: `4em`

                }}>
                    <div className="text-center text-light">
                        <div id="t-2" className="fw-bold">Contact Informations</div>
                        <p id="t-3">We genuinely value your interest in our travel and tour services and look forward to making your travel dreams a reality <br></br>Reach out to us using the information below, and let's start creating unforgettable journeys together.</p>

                    </div>

                </div >

                <div className='container mt-5 p-5 contactjs'>

                    <div className=" mt-4 ">
                        {/* <div className="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                        </div> */}

                        <h3 className="mt-5 text-center">Talk to us, we are happy to help</h3>





                        <form ref={form} onSubmit={sendEmail}>
                            <h3 className="text-center text-light">Contact us</h3>
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="text-light">Name</label>
                                        <input type="text" name="user_name" className="form-control mb-2" placeholder="Name" required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-light">Email</label>
                                        <input type="email" name="user_email" className="form-control mb-2" placeholder="Email" required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-light">Your Message</label>
                                        <textarea type="text" name="message" className="form-control mb-2" placeholder="message" required
                                        />
                                    </div>
                                    <div className="form-group text-center pt-3">
                                        <input type="submit" name="btnSubmit" value="Send" className="btnContactSubmit" />
                                    </div>
                                </div>
                            </div>

                        </form>
                        <div className="container-fluid row">
                            <div className="col-sm text-center mt-5 ">
                                <div id="t-1" className='mt-5 fw-bold'>Find Us on Google Maps</div>
                                <p id="t-3" className='mb-5'>Follow the simple directions below to reach us and begin your extraordinary travel experience.</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.6858144043914!2d-0.23802070543364806!3d5.6048918522728925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99764996816b%3A0x8486a2454905be11!2sTesano%2C%20Accra!5e0!3m2!1sen!2sgh!4v1686191008126!5m2!1sen!2sgh" style={styles} title="tour-ghana" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contactus



