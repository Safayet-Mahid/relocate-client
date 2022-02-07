import React from 'react';
import { Link } from 'react-router-dom';
import Destination from '../../DestinationPage/Destination/Destination';
import "./SingleDestinations.css"

const Singledestinations = (props) => {
    const { town_name, state_name, image1, _id } = props.singleTownInfo;

    return (
        <div>
            <Link to={`/destination/${_id}`}>
                <div className='destination' style={{ backgroundImage: `url(${image1})` }}>

                    <div className='destination-body' style={{ background: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.92)) 100% ` }}>
                        <div className='onHover'>
                            <p className='text-xl font:medium'>Click for details</p>
                        </div>
                        <h4 className='font-extrabold text-5xl '>{town_name}</h4>
                        <h5 className='font-medium text-lg mt-2'>{state_name}</h5>
                    </div>
                </div>
            </Link>
        </div>


    );
};

export default Singledestinations;