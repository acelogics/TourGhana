import React, { useEffect, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import data from './data'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './tour.css'
import Dashboard from './Dashboard'

const SingleProduct = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const find = data.find(item => item.name == id)

    const [inputValue, setInputValue] = useState(find.name);


    const size = {
        width: `50em`
    }

    const onSubmit = (data) => {

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        console.log("Form submitted", data)
        // reset()
        navigate('/booked')
    }
    return (
        <>


            <div className='container my-5 mb-5'>

                <div className='d-md-flex row align-items-center'>

                    <div className='my-5 col-md-8'>
                        <img src={find.image} className="img-fluid" style={size}></img>
                    </div>

                    <div className='col-md-4'>
                        <div className='d-flex align-items-center justify-content-between mb-5'>
                            <div className='fs-3'>$ {find.price} / person</div>
                            <div>4.5 ⭐ rating</div>
                        </div>


                        <h5>Information</h5>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row m-2 ">



                                <label htmlFor="Name" className="col-sm-2 ">Name</label>
                                <div className="col-sm-10 mb-3">
                                    <input type="text" {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Full Name is reqiured"
                                        }
                                    })} className="form-control" placeholder='Full Name' autoComplete='password' ></input>

                                    <small className='text-danger'> {errors.name?.message}</small>
                                </div>

                                <label className="col-sm-2 ">Tour Site</label>
                                <div className="col-sm-10 mb-3">
                                    <input type="text" className="form-control"  {...register("location", {
                                        required: {
                                            value: true,
                                        }
                                    })} value={inputValue}></input>
                                </div>

                                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10 mb-3">
                                    <input type="email" {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Provide a valid email"
                                        }
                                    })} className="form-control" placeholder='Email' autoComplete='password' ></input>

                                    <small className="text-danger">{errors.email?.message}</small>
                                </div>

                                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                                <div className="col-sm-10 mb-3">
                                    <input type="number" {...register("phoneNumber", {
                                        required: {
                                            value: true,
                                            message: 'Provide a valid Phone number'
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "Provide a valid 10 digit number",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Phone number is more than 10 digits",
                                        },
                                    })} className="form-control" placeholder='Phone Number' autoComplete='password' ></input>
                                    <small className='text-danger'> {errors.phoneNumber?.message}</small>

                                </div>

                                <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                                <div className="col-sm-10 mb-3">
                                    <input type="date" {...register("date", { required: true, min: 2 })} className="form-control" ></input>
                                </div>

                                <label htmlFor="number" className="col-sm-5 col-form-label">No of persons</label>
                                <div className="col-sm-7 mb-3">
                                    <input type="number"  {...register("persons", {
                                        required: {
                                            value: true,
                                            message: "Must be one or more persons"
                                        },
                                        min: {
                                            value: 1,
                                            message: "Cannot be 0 or less"
                                        }
                                    })} className="form-control" placeholder='Number of persons' autoComplete='password' ></input>
                                    <small className='text-danger'> {errors.persons?.message}</small>

                                </div>



                            </div>

                            <div className='text-center '>
                                <button type="submit" className=' btn btns yellow btn-warning col-8 mx-auto'>Book</button>

                            </div>


                        </form>

                    </div>

                </div >
                <div className="row">
                    <div>
                        <h1 className='ms-2 fs-2 mb-0'>{find.name}</h1>
                        <p className='m-3 '><GoLocation /> {find.location}</p>

                        <div className='col-md-7'>{find.description}</div>


                    </div>

                </div>


            </div >



        </>


    )
}

export default SingleProduct

