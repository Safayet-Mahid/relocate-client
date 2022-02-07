import React, { useEffect, useState } from 'react';
import Singledestinations from '../SingleDestinations/Singledestinations';
import "./HomeDestinations.css"

const HomeDestinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch("https://sleepy-mountain-62928.herokuapp.com/destinations")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDestinations(data)
            })
    }, [])
    return (
        <div className='home-destinations'>
            <div className=' container mx-auto py-20'>
                <img src="../../../../images/image 12.png" alt="" />
                <h2>top</h2>
                <h3 className='text-white font-bold text-7xl my-9'>destinations</h3>
                <p className='mb-14 text-2xl'> It's hard enough deciding to move, you don't have to worry about where to move <br /> to. These are some of the most popular and best locations to move to based on a <br /> number of factors. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {
                        destinations.map(town => <Singledestinations
                            key={town._id}
                            singleTownInfo={town}
                        >
                        </Singledestinations>)
                    }
                </div>
            </div>

        </div>
    );
};

export default HomeDestinations;