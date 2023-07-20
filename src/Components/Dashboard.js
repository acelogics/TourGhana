import React, { useEffect, useState } from 'react'


const Dashboard = () => {



    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/bookings")
            .then((response) => response.json())
            .then((data) => setdata(data))
            .catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            <div className='container text-light'>
                <h3>Bookings</h3>
                <hr className='text-light mt-3'></hr>

                <div className="table-responsive">
                    <table className="table mt-5 text-light" >
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Tour Site</th>
                                <th scope="col">Persons Involved</th>



                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, id) => {
                                    return (
                                        <tr key={id} className='text-center'>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.date}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.location}</td>
                                            <td>{item.persons}</td>







                                        </tr>

                                    )
                                })
                            }


                        </tbody>
                    </table>


                </div>

            </div>



        </>
    )
}

export default Dashboard