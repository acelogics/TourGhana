import React from 'react'
import './Home.css'

const Header = () => {
    return (
        <>
            <div className='row header' style={{
                minHeight: `100vh`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundImage: `linear-gradient(rgba(84, 107, 199, 0.7), rgba(4, 9, 30, 0.7)), url("./tools/wallpaper.jpg")`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                marginBottom: `4em`

            }}>
                <div className="text-center text-light">
                    <div id="t-1">Let Us Take you To Your Dream</div>
                    <div id="t-2" className="fw-bold">DREAM DESTINATIONS</div>
                    <p id="t-3">Explore. Discover. Wander.</p>

                </div>

            </div >

        </>
    )
}

export default Header