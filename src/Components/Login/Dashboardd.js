import React from 'react'
import './dashboard.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Dashboardd = () => {
    const navigate = useNavigate()
    return (
        <>


            <div className="container lh-lg">

                <div className="row mt-4 mb-5">
                    <div style={{ width: '25%' }} className="col-3 sidebar-left pt-5 text-center">

                        <h5 className="text-light fw-bold mt-5">DASH<br></br>BOARD</h5>

                        <h5 className="text-light mt-5 fw-bold mb-3">QUICK LINKS</h5>

                        <NavLink to="summary" className=' text-decoration-none text-light active'>Summary</NavLink>
                        <div className='my-3'>  <NavLink to="admin" className='text-decoration-none text-light'>Bookings</NavLink><br /></div>
                        {/* <Link to="#" className='text-decoration-none text-light'>Users</Link><br /> */}
                        <button className="btn btn-primary mt-2 mt-5" onClick={() => navigate("/")}>Sign Out</button>



                    </div>


                    <div style={{ width: '75%' }} className="col-sm-9 sidebar-right pt-4 height">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div >



        </>
    )
}

export default Dashboardd