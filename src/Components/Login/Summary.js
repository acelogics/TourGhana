import React from 'react'
// import Chart from './Chart'

import './summary.css'

const Summary = () => {
    return (
        <>
            <div className="text-light p-3">
                <h3>Summary</h3></div>
            <div className="container">

                <div className="row">
                    <div className="col-sm gy-3"><div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Revenue</h5>
                            <p className="card-text">GHC 0.00 <span className="small-font text-success">⬆ +2.2% </span> </p>
                            <p className="card-text">Compared to last month</p>

                        </div>
                    </div></div>
                    <div className="col-sm gy-3"><div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Totals Tours</h5>
                            <p className="card-text">GHC 0 <span className="small-font text-success">⬆ 0% </span></p>
                            <p className="card-text">Compared to last month</p>                        </div>
                    </div></div>
                    <div className="col-sm gy-3"><div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Losses</h5>
                            <p className="card-text">GHC 0 <span className="small-font"> ⬇ ⬆</span></p>
                            <p className="card-text">Compared to last month</p>
                        </div>
                    </div></div>
                </div>
            </div>
            <hr className='text-light mt-5'></hr>




            <div className="container">
                <h3 className="p-3 text-light">User Analytics</h3>

                <div className="row">
                    <div className="col-sm" ><div className="card">
                        <div className="card-body" >
                            {/* <Chart></Chart> */}
                        </div>
                    </div></div>
                </div>
            </div>


            <hr className='text-light mt-5'></hr>









        </>
    )
}

export default Summary