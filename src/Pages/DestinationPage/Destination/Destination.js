import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import DestinationBanner from '../DestinationBanner/DestinationBanner';
import DestinationBody from '../DestinationBody/DestinationBody';

const Destination = () => {
    const cityId = useParams()

    const [city, setCity] = useState({})
    useEffect(() => {
        fetch("https://sleepy-mountain-62928.herokuapp.com/destinations")
            .then(res => res.json())
            .then(data => {
                const clickedCity = (data.find(singleData => singleData._id === cityId.id))
                setCity(clickedCity)
            })
    }, [cityId])

    return (
        <div>
            <Navigation></Navigation>
            <DestinationBanner city={city}></DestinationBanner>
            <DestinationBody city={city}></DestinationBody>
            <Footer></Footer>

        </div>
    );
};

export default Destination;