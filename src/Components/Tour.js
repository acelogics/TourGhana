import React, { startTransition, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import data from './data'
import './tour.css'
import { Link } from 'react-router-dom'
import { bgS } from '../assets/toursites'



const Tour = () => {
    const [search, setsearch] = useState("")

    const filterNames = data.filter(item => {
        return item.name.toLowerCase().includes(search) || item.region.toLowerCase().includes(search)
    })



    return (
        <>

            <div className='container-fluid m-o p-0'>
                <img alt="toursitesimg" src={bgS} id="imgs"></img>
            </div>

            <div className="container mb-5">

                <div className="row mt-5 ">
                    <div className='d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <input type="text" className="form-control" placeholder="Search available trips" value={search} onChange={(e) => {
                                setsearch(e.target.value); startTransition(() => setsearch(e.target.value));
                            }}></input>
                        </div>
                    </div>


                    {
                        filterNames.map((item) => {
                            return (
                                <div key={item.id} className="col-md-4 gy-3 mt-3 ">
                                    <div className='m-3'>
                                        <img src={item.image} className="card-img-top img-fluid" alt="product"></img>
                                        <div className="card-body my-3">
                                            <h5 className="card-title">{item.name}</h5>
                                            {/* <p className="card-text mb-1">{item.description} </p> */}
                                            <p> <GoLocation /> {item.location},<span className="ms-1">{item.region}</span></p>

                                            <div className="d-flex justify-content-between">
                                                <Link to={`/bookings/${item.name}`} className="yellow"  > <button className="btn btns rounded-0">Book</button></Link>
                                                <p className="card-text fw-bold" >GHC {item.price} / person</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>)
                        })

                    }


                </div >
            </div >


        </>
    )
}

export default Tour