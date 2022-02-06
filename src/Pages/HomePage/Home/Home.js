import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import HomeDestinations from '../HomeDestinations/HomeDestinations';
import MoreDestinations from '../MoreDestinations/MoreDestinations';

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <HomeDestinations></HomeDestinations>
            <MoreDestinations></MoreDestinations>
            <Footer></Footer>

        </div>
    );
};

export default Home;