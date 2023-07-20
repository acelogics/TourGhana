import React, { useState } from 'react'
import app from './Firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import "./SignInn.css"

const SignInn = (error) => {

    const navigate = useNavigate()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const auth = getAuth(app);

    const signIn = (error) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("User has successfully signed In")
                navigate("/dashboard/summary")



            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                alert("Invalid Details")


            });
    }


    const image = "https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=826&t=st=1688021961~exp=1688022561~hmac=53df772053e44c0b5f81d55375d48e65998ac3162a9dfd75b429ba98678009ad"
    const width = {
        width: "50%",

    }

    return (
        <>

            <div id="header" className="container d-sm-flex justify-content-center">
                <div className="d-sm-flex justify-content-center">
                    <div class="col-sm-9 card">

                        <div className="d-sm-flex align-items-center colorGrey">

                            <div className="col-sm-6 ">
                                <img src={image} class="card-img-top img-fluid object-fit-fill" alt="..." />
                                {/* <img src={image} class="card-img-top img-fluid" alt="..." /> */}

                            </div>

                            <div class="card-body col-sm-7 text-light justify-content-center ">
                                <h5 class="card-title mb-3 fs-3">Sign In</h5>
                                <div className="m-3 me-0">
                                    <h5 className='small'>Email</h5>
                                    <input type="text" value={email} placeholder="Enter Email" className='me-3 my-2 form-control' autoComplete='current-password' onChange={(e) => {
                                        setemail(e.target.value)
                                    }}></input>

                                    <h5 className='small mt-4'>Password</h5>
                                    <input type="password" value={password} placeholder="Enter password" className='form-control  ' onChange={(e) => {
                                        setpassword(e.target.value)
                                    }}></input>

                                    <div class="d-grid">
                                        <button id="hoverBtn" className='btn fw-bold mt-3 px-auto text-dark' onClick={signIn}>Sign In</button>
                                    </div>
                                    {/* {(error) ? (<div className="text-danger fw-bold text-center">Invalid details</div>) : ""} */}


                                    <div className='text-center mt-4'>


                                        {/* <Link to="/signup" className="cta text-decoration-none">
                                            <span className='small ctas text-light'>Create Account</span>
                                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>

                                        </Link> */}
                                    </div>
                                    {/* <div className='text-center mt-2'>
                                        <button id="fontWeight" className='btn btn-light border px-4 mt-3'> <FcGoogle size="1.5em" /> CONTINUE WITH GOOGLE</button>
                                    </div> */}

                                </div>

                            </div>
                        </div>

                    </div>

                </div >

            </div >











        </>
    )
}

export default SignInn