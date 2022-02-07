import React from 'react';
import "./DestinationBanner.css"

const DestinationBanner = ({ city }) => {
    const { image1, town_name, state_name } = city;
    // console.log(city.image1)
    return (
        <div className='container mx-auto destination-banner  p-5'>
            <img src={image1} className='w-full h-full' alt="" />
            <div className='banner-body' >
                <h4 className='font-bold text-7xl '>{town_name}</h4>
                <h5 className='font-medium text-lg mt-2'>{state_name}</h5>
            </div>


        </div>
    );
};

export default DestinationBanner;