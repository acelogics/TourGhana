import React, { useState, useContext } from 'react'
import './Homed.css'
import data from './data'
import CartContext from '../CartContext'

const Homed = () => {
    const [cart, setcart] = useState([])

    // console.log(cart)

    const global = useContext(CartContext);

    const dispatch = global.dispatch
    const state = global.state

    console.log(global)

    // console.log(cart)


    return (
        <>
            <div id="header" className=''>
                <div className='container'>
                    <h1 className="text-center my-4">React Context Api Project</h1>


                    <div className='row style'>

                        {
                            data.map((item, key) => {
                                item.quantity = 1;
                                return (
                                    <div key={key} className='col-md-4 my-3'>
                                        <div className="card  h-100">
                                            <img src={item.image} className="card-img-top img-fluid  m-auto  " alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">GHC {item.price}</p>
                                                <button className="btn btn-primary me-3 px-5" onClick={() => dispatch({
                                                    type: 'ADD', payload: item

                                                })}>Buy</button>

                                                {/* {state.includes(item) ? (
                                                    <button className="btn btn-danger px-3" onClick={() => {
                                                        dispatch(state.filter((prod) => prod.id !== item.id))
                                                    }}>Remove</button>
                                                ) : (<button className="btn btn-primary me-3 px-5" onClick={() => dispatch({
                                                    type: 'ADD', payload: item
                                                })}>Buy</button>)
                                                } */}



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

export default Homed