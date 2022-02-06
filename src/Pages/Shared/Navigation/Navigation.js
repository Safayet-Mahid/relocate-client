import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className='container mx-auto'>
            <nav className='flex justify-between align-center mx-auto py-5 '>
                <div className=''>
                    <NavLink to="#" className="logo" >relocate</NavLink>
                </div>
                <div>
                    <NavLink to="/destination">Destinations</NavLink>
                    <NavLink to="#">Deals</NavLink>
                    <NavLink to="#">Explore</NavLink>
                    <NavLink to="#">Resources</NavLink>
                    <NavLink to="#">☰</NavLink>

                </div>

            </nav>
        </div>
    );
};

export default Navigation;