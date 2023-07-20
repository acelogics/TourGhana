import React from 'react'

const About = () => {
    return (
        <>


            <div className='row header' style={{
                minHeight: `50vh`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundImage: `linear-gradient(rgba(84, 107, 199, 0.7), rgba(4, 9, 30, 0.7)), url("./tools/abt1.jpg")`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                marginBottom: `4em`

            }}>
                <div className="text-center text-light">
                    <div id="t-2" className="fw-bold">ABOUT US</div>

                </div>

            </div >

            <div className="container my-5">
                <div className='row'>
                    <div>
                        <h1 className='fw-bold'>Our History</h1>
                        <p>Founded in June 2023, our tour website has a rich history of connecting adventurers with captivating destinations. It all began with a passionate team of travel enthusiasts who envisioned a platform that would make exploring the world seamless and accessible. Since our humble beginnings, we have grown exponentially, expanding our offerings, partnering with trusted providers, and curating exceptional experiences. Through continuous innovation and a relentless commitment to customer satisfaction, we have evolved into a trusted name in the travel industry. Today, we proudly stand as a go-to resource for wanderers worldwide, enabling them to embark on unforgettable journeys and create lifelong memories.</p>
                    </div>

                    <div>
                        <h1 className='fw-bold'>Our Mission</h1>
                        <p>Our mission is to inspire and empower travelers to embark on extraordinary journeys that foster a deep appreciation for the world's diverse cultures, awe-inspiring landscapes, and immersive adventures. Through personalized itineraries, exceptional service, and a commitment to sustainability, we aim to make travel accessible, meaningful, and transformative. With a passion for creating unforgettable experiences, we invite you to join us on a journey of discovery, connection, and lifelong memories. #TravelWithPurpose</p>
                    </div>

                    <div>
                        <h1 className='fw-bold'>Our Vision</h1>
                        <p>Our vision is to be the leading tour website that sparks a sense of wanderlust and enables travelers to explore the world with ease and joy. We envision a future where travel becomes a catalyst for personal growth, cultural understanding, and global connectivity. Through innovative technology, exceptional customer service, and a commitment to sustainability, we strive to inspire and empower individuals to embark on unforgettable adventures, creating cherished memories and fostering a deep appreciation for the beauty and diversity of our planet. Together, we envision a world where travel transcends boundaries and enriches lives.</p>
                    </div>

                </div>


            </div>


        </>
    )
}

export default About