import React from 'react';
import "./Herosection.css"

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className='container mx-auto flex flex-col '>
                <h2 className='px-5 md:text-9xl sm:text-7xl xs:text-5xl'>make the right</h2>
                <div className=' flex justify-between'>
                    <h3 className=' text-white font-bold md:mr-10 lg:mr-20 md:text-9xl sm:text-7xl xs:text-5xl'>move.</h3>
                    <button className='text-white font-medium text-left flex pt-48'>
                        <div className='explore-btn'> <i className='bx bx-down-arrow-alt' style={{ marginTop: "-45px", }}></i>
                        </div>
                        <div>EXPLORE <br /> DESTINATIONS</div>
                    </button>
                </div>
            </div>

        </div>



    );
};

export default HeroSection;