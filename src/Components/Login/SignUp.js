import React, { useState } from 'react'
import app from './Firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom'
import "./SignInn.css"


const SignUp = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const auth = getAuth(app);

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("Created an account Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert("Weak password")
            });

    }
    const image = "https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=826&t=st=1688021961~exp=1688022561~hmac=53df772053e44c0b5f81d55375d48e65998ac3162a9dfd75b429ba98678009ad"


    return (
        <>
            <div id="header" className="container d-sm-flex justify-content-center">
                <div className="d-sm-flex justify-content-center">
                    <div class="col-sm-9 card">

                        <div className="d-sm-flex align-items-center colorGrey">

                            <div className="col-sm-6 ">
                                <img src="./tools/forgot-copy.webp" class="card-img-top img-fluid " alt="..." />
                                {/* <img src={image} class="card-img-top img-fluid" alt="..." /> */}

                            </div>

                            <div class="card-body col-sm-7 text-light justify-content-center ">
                                <h5 class="card-title mb-3 fs-3">Create an Account</h5>
                                <form className="m-3 me-0">
                                    <h5 className='small'>Username</h5>
                                    <input type="text" value={email} placeholder="Username" className='me-3 my-2 form-control' autoComplete='current-password' onChange={(e) => {
                                        setemail(e.target.value)
                                    }}></input>

                                    <h5 className='small'>Email</h5>
                                    <input type="text" value={email} placeholder="Enter Email" className='me-3 my-2 form-control' autoComplete='current-password' onChange={(e) => {
                                        setemail(e.target.value)
                                    }}></input>

                                    <h5 className='small mt-4'>Password</h5>
                                    <input type="password" value={password} placeholder="Enter password" className='form-control  ' onChange={(e) => {
                                        setpassword(e.target.value)
                                    }}></input>

                                    <div class="d-grid">
                                        <button id="hoverBtn" className='btn fw-bold mt-3 px-auto text-dark' onClick={signUp}>Create an Account</button>
                                    </div>
                                    <div className=' text-center mt-4'>
                                        {/* <small> <input type="checkbox"></input>
                                            Remember Me
                                        </small> */}

                                        <Link to="/signin" className="cta text-decoration-none">
                                            <span className='small ctas text-light'>Sign In</span>
                                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>

                                        </Link>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <button id="fontWeight" className='btn btn-light border px-4 mt-3'> <FcGoogle size="1.5em" /> CONTINUE WITH GOOGLE</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>

                </div >

            </div >



        </>
    )
}

export default SignUp
