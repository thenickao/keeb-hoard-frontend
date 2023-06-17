import React, { useState} from 'react'
import '../styles/main.css'

function Home() {
    const [showFullContent, setShowFullContent] = useState(false)
    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    }
    return(
        <div className="home container">
            <h1>Keeb Hoard</h1>
            <br></br>
                <p>
                    Welcome to the world of mechanical keyboards, where typing becomes an art form and every keystroke feels like a symphony. Gone are the days of mushy rubber dome keyboards that lack personality and precision. In this blog post, we will dive into the captivating realm of mechanical keyboards and explore why they have become the ultimate choice for keyboard enthusiasts and professionals alike.
                </p>
                {showFullContent ? (
                    <>
                    <br></br>
                    <h2>The Tactile Euphoria</h2>
                    <p>
                        Imagine a keyboard that responds to your touch with a satisfying click and a subtle tactile bump. That's precisely what mechanical keyboards bring to the table. Each keypress is accompanied by a delightful feedback that not only enhances typing speed and accuracy but also makes the entire experience incredibly enjoyable. The tactile response is akin to a musician feeling the vibrations of their instrument, elevating the act of typing into an immersive sensory journey.
                    </p>
                    <br></br>
                    <h2>Customization for the Discerning Tastes</h2>
                    <p>
                        One size does not fit all, and the realm of mechanical keyboards understands that well. These keyboards offer a variety of switch types, each with its unique characteristics. Whether you prefer a smooth linear switch, a tactile switch that provides a gentle bump, or a clicky switch that audibly confirms your every press, there's a switch type tailored to your preferences. This customization empowers you to find the perfect match for your typing style and elevate your productivity to new heights.
                    </p>
                    <br></br>
                    <h2>Craftsmanship and Aesthetic Appeal</h2>
                    <p>
                        Mechanical keyboards aren't just functional marvels; they're also a sight to behold. Crafted with premium materials like aluminum or steel, these keyboards exude a sense of sophistication and durability. Their solid construction provides a satisfying weight and stability, ensuring they stay firmly in place during even the most intense typing sessions. Moreover, mechanical keyboards offer a canvas for personal expression, with customizable keycaps, vibrant colors, and artistic designs that let you make a statement that is uniquely yours.
                    </p>
                <button onClick={toggleContent} className="info-btn minimize-btn">
                    see less...
                </button><br></br><br></br>
            </>
        ) : (
            <p>
                <button onClick={toggleContent} className="info-btn read-more-btn">
                    read more...
                </button><br></br><br></br>
            </p>
        )}
            {/* <Link to='/register' className='btn btn-primary btn-lg'>Create Profile</Link> */}
        </div>
    )
}

export default Home