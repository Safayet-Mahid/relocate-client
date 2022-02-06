import React from 'react';
import "./DestinationBanner.css"

const DestinationBanner = () => {
    return (
        <div className='container mx-auto destination-banner  p-5'>
            <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Paraty.jpg" className='w-full h-full' alt="" />
            <div className='banner-body' >
                <h4 className='font-bold text-7xl '>Paraty</h4>
                <h5 className='font-medium text-lg mt-2'>Rio De jenery</h5>
            </div>


        </div>
    );
};

export default DestinationBanner;