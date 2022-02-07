import React from 'react';
import DestinationInfo from '../DestinationInfo/DestinationInfo';
import DestinationStat from '../DestinationStat/DestinationStat';

const DestinationBody = ({ city }) => {
    return (
        <div className='container mx-auto mt-9'>
            <div className='flex justify-between'>
                <DestinationInfo city={city}></DestinationInfo>
                <DestinationStat city={city}></DestinationStat>

            </div>
            <div className='flex justify-between items-center px-5 rounded-lg' style={{ backgroundColor: "#00BEAC", width: "100%", }}>
                <div className='flex-1'>
                    <img style={{ marginTop: "-50px" }} src="https://i.ibb.co/7SKf32q/image-7.png" alt="" />
                </div>
                <div className='text-white flex-2 text-left'>
                    <h6 className='font-bold mb-2'>Are you ready to move?</h6>
                    <p className='text-sm'>Get in touch and let our team help you put things together and plan your move.</p>
                </div>
                <div className='flex-1  '><button style={{ backgroundColor: "white", color: "#00BEAC", padding: "1rem 2rem", borderRadius: "5px" }}>Get In Touch</button></div>
            </div>

        </div>
    );
};

export default DestinationBody;