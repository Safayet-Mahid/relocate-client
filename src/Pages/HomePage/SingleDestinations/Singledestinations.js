import React from 'react';
import "./SingleDestinations.css"

const Singledestinations = (props) => {
    const { town_name, state_name, image1 } = props.singleTownInfo;
    return (
        <div className='destination' style={{ backgroundImage: `url(${image1})` }}>
            {/* <div><img src={image1} alt="" /></div> */}
            <div className='destination-body' style={{ background: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.92)) 100% ` }}>
                <h4 className='font-extrabold text-5xl '>{town_name}</h4>
                <h5 className='font-medium text-lg mt-2'>{state_name}</h5>
            </div>

        </div>
    );
};

export default Singledestinations;