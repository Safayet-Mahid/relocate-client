import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer pb-12'>
            <div className='footer-image'><img className='w-full' src="https://i.ibb.co/g6PSdRF/image-8.png" alt="" /></div>
            <div className='container  mx-auto flex justify-between text-left mt-8'>
                <div>
                    <h6 className='mb-4 font-medium uppercase'>Legal</h6>
                    <div>
                        <p>MSA Self Managed</p>
                        <p>Privacy</p>
                        <p>GDPR</p>
                        <p>Guidelines for Law Enforcement</p>
                        <p>Terms of Service</p>
                        <p>Manage Cookies</p>
                    </div>
                </div>
                <div>
                    <h6 className='mb-4 font-medium uppercase'>Product</h6>
                    <div>
                        <p>Why move?</p>
                        <p>Features</p>
                        <p>Omnichannel</p>
                        <p>Community</p>
                        <p>Webinars</p>
                        <p>Marketplace</p>
                    </div>
                </div>
                <div>
                    <h6 className='mb-4 font-medium uppercase'>Company</h6>
                    <div>
                        <p>Team</p>
                        <p>About</p>
                        <p>Jobs</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>Newsletter</p>
                    </div>
                </div>
                <div className='flex flex-col justify-around pt-5 text-2xl'>

                    <i class='bx bxl-facebook-circle'></i>
                    <i class='bx bxl-twitter' ></i>
                    <i class='bx bxl-instagram-alt' ></i>
                    <i class='bx bxl-linkedin' ></i>
                </div>

            </div>

        </div >
    );
};

export default Footer;