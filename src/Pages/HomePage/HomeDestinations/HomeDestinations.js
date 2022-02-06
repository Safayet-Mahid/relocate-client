import React, { useEffect, useState } from 'react';
import Singledestinations from '../SingleDestinations/Singledestinations';
import "./HomeDestinations.css"
const destinationsList = [
    {
        town_name: "Paraty",
        state_name: "Rio de Janeiro",
        image1: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Paraty.jpg"
    },
    {
        town_name: "Morretes",
        state_name: "Rio de Janeiro",
        image1: "https://t4.ftcdn.net/jpg/02/62/09/73/360_F_262097330_O9TncoOu0SLzkKPaNBHz2wUw1AOizvHD.jpg"
    },
    {
        town_name: "Olinda",
        state_name: "Rio de Janeiro",
        image1: "https://images.squarespace-cdn.com/content/v1/57b9b98a29687f1ef5c622df/1530659347457-VO6S1MAVP3YPJ0KEUYMD/Olinda+Brazil"
    },
    {
        town_name: "Gramado",
        state_name: "Rio de Janeiro",
        image1: "https://content.r9cdn.net/rimg/dimg/40/bc/8761dc07-city-43767-16981dd5603.jpg?crop=true&width=1366&height=768&xhint=3144&yhint=1983"
    }
]

const HomeDestinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        setDestinations(destinationsList)
    }, [])
    return (
        <div className='home-destinations'>
            <div className=' container mx-auto py-20'>
                <img src="../../../../images/image 12.png" alt="" />
                <h2>top</h2>
                <h3 className='text-white font-bold text-7xl my-9'>destinations</h3>
                <p className='mb-14 text-2xl'> It’s hard enough deciding to move, you don’t have to worry about where to move <br /> to. These are some of the most popular and best locations to move to based on a <br /> number of factors. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {
                        destinations.map(town => <Singledestinations
                            key={town.town_name}
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