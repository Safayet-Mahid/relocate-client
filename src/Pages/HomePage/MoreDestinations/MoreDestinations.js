import React from 'react';
import "./MoreDestinations.css"

const MoreDestinations = () => {
    return (
        <div className='more-destination container mx-auto my-20'>
            <h2 className='mb-11'>more</h2>
            <h3 className=' font-bold text-7xl my-9'>destinations</h3>
            <p className='my-3 text-2xl'> Your peace of mind doesn’t have to be tied to where everyone else is. We have a <br /> good number of travel and relocation destinations. Take your time and find the  brperfect one for you. . </p>

            <div className='grid grid-cols-8 grid-rows-6 gap-4 gallery'>
                <div className=' destination-parent rounded col-span-2 row-span-6'><img src="https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2017/10/estaing-tour-aveyron.gif?ssl=1" alt="" />
                    <div className='more-destination-body ' style={{ background: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .9) 90%)` }}>
                        <h4 className='font-bold text-3xl '>Estaing</h4>
                        <h5 className='font-medium text-lg mt-2'>France</h5>
                    </div>
                </div>
                <div className=' destination-parent rounded col-span-3 row-span-3'>
                    <img src="https://iceland24blog.com/wp-content/uploads/2018/05/best-hotels-iceland-vik.jpg" alt="" />
                    <div className='more-destination-body' style={{ background: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 90%)` }}>
                        <h4 className='font-bold text-3xl '>Vík í Mýrda</h4>
                        <h5 className='font-medium text-lg mt-2'>Iceland</h5>
                    </div>
                </div>
                <div className=' destination-parent rounded col-span-3 row-span-3'>
                    <img src="https://i.pinimg.com/originals/24/28/92/2428924fa95a157c3daa2e450cd60217.jpg" alt="" />
                    <div className='more-destination-body' style={{ background: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 90%)` }}>
                        <h4 className='font-bold text-3xl '>Hamnoy village</h4>
                        <h5 className='font-medium text-lg mt-2'>Norway</h5>
                    </div>
                </div>
                <div className='destination-parent  rounded col-span-6 row-span-3'>
                    <img src="http://cdn.sandals.com/sandals/v12/images/resorts/swh/home/main-slider/aerial-view.jpg" alt="" />
                    <div className='more-destination-body' style={{ background: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 90%)` }}>
                        <h4 className='font-bold text-3xl '>Montego Bay</h4>
                        <h5 className='font-medium text-lg mt-2'>JAMAICA</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreDestinations;