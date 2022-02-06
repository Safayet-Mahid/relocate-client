import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import DestinationBanner from '../DestinationBanner/DestinationBanner';
import DestinationBody from '../DestinationBody/DestinationBody';

const Destination = () => {
    return (
        <div>
            <Navigation></Navigation>
            <DestinationBanner></DestinationBanner>
            <DestinationBody></DestinationBody>
            <Footer></Footer>

        </div>
    );
};

export default Destination;