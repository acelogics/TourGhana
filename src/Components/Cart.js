import React, { useContext } from 'react'
import CartContext from '../CartContext'


const Cart = () => {
    const global = useContext(CartContext)

    const state = global.state
    const dispatch = global.dispatch

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        {
                            state.map((item, index) => {
                                return (
                                    <div key={item.id} >
                                        <div className="d-flex w-50 h-100 my-3">
                                            <img src={item.image} className="card-img-top img-fluid  m-auto" alt="..."></img>
                                            <div className="card-body ">
                                                <h5 className="card-title mb-5">{item.name}</h5>
                                                <p className="card-text">{item.price}</p>

                                            </div>


                                            <div className='col-7'>
                                                <p className="card-text">{item.quantity}</p>
                                                <p className="card-text">{item.quantity * item.price}</p>
                                            </div>


                                            <div className='col-8'>
                                                <button className='btn btn-secondary'>+</button> <p className="card-text">{item.quantity}</p> <button>-</button>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default Cart