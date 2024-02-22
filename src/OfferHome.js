import React from 'react'
import './offer.css'
import { kakum2, mauso, boti } from './assets/toursites'

const OfferHome = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md text-center">
                        <h3 className='fw-bold mb-0' data-aos="fade-down" ata-aos-duration="1500">POPULAR DESTINATIONS</h3>
                        <p data-aos="fade-down"
                            data-aos-duration="500">CHECK OUT OUR TOP-RATED TOURS</p>

                        <div className="row text-center">
                            <div className="col-md-4 gy-sm-3" data-aos="fade-up" data-aos-duration="1000">
                                <div className="card">
                                    <img src={kakum2} className="card-img-top img-fluid" alt="product"></img>
                                    <div className="cards-body">
                                        <h5 className="card-title">Kakum National Park</h5>
                                        {/* <p className="card-text fw-bold">GHC 2.00</p> */}
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 gy-sm-3" data-aos="fade-up" data-aos-duration="2000">
                                <div className="card ">
                                    <img src={mauso} className="card-img-top img-fluid " alt="product"></img>
                                    <div className="cards-body">
                                        <h5 className="card-title">Kwame Nkrumah Mausoleoum</h5>
                                        {/* <p className="card-text fw-bold">GHC 15.00</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  gy-sm-3" data-aos="fade-up" data-aos-duration="3000">
                                <div className="card">
                                    <img src={boti} className="card-img-top img-fluid" alt="product"></img>
                                    <div className="cards-body">
                                        <h5 className="card-title">Boti Falls</h5>
                                        {/* <p className="card-text fw-bold">GHC 5.00</p> */}
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                    <div>






                    </div>
                </div>
            </div>


        </>
    )
}

export default OfferHome