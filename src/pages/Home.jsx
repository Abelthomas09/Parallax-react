import React, { useEffect, useState } from 'react'
import IMG2 from '../assets/dest-02.webp';
import IMG3 from '../assets/dest-03.webp';
import IMG4 from '../assets/dest-04.webp';
import IMG5 from '../assets/dest-05.jpg'
import IMG6 from '../assets/dest-06.jpg'
import IMG7 from '../assets/dest-07.jpg'

const Home = () => {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div  className='styled-home'>
            <section className='parallax-container'>
                <div className='parallax' style={{ transform: `translateY(${offsetY * 0.155}px)` }}>
                    <h1 style={{ transform: `translateY(${offsetY * 0.185}px)` }}>Nature.</h1>
                    <div className='footer-hero'>
                        <p>Discover your world with us!</p>
                    </div>
                    <div className='gradient' />
                </div>
            </section>

            <section style={{marginTop:'300px'}} className='activities'>
                <div className='grid'>
                    <div className='item'>
                        <img src={IMG2} alt="activity" />
                        <h3 style={{left:'150px'}}>Experiences</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG3} alt="activity" />
                        <h3>Activities</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG4} alt="activity" />
                        <h3>Campaings</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG5} alt="activity" />
                        <h3>Adventures</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG6} alt="activity" />
                        <h3 style={{left:'230px'}}>Hikings</h3>
                    </div>
                    <div  className='item'>
                        <img src={IMG7} alt="activity" />
                        <h3>Sightseeing</h3>
                    </div>
                </div>
            </section>
               <div className='butt'>
                    <button>
                        More
                    </button>
               </div>

            <section className='contact'>
                <h2>support@nature.com</h2>
                <p>
                    <span>© 2024 Nature</span>
                    <span>/</span>
                    <span>Code by Abel</span>
                </p>
            </section>
        </div>
    )
}

export default Home