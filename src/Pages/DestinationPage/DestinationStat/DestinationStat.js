import React from 'react';
import "./DestinationStat.css"

const DestinationStat = () => {
    return (
        <div className='container mx-auto '>
            {/* general info of the city */}
            <div className='mx-12'>
                <div className='flex border rounded-md justify-between p-3 text-left mb-9' >
                    <div className='p-2 flex-1 ' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-medium mb-3'>CITY SIZE</h6>
                        <div className='flex ' >
                            <i className='bx bxs-group text-xl' style={{ color: "#00A77F" }}></i>
                            <div className='mx-2'>
                                <p className='font-bold'>37,570</p>
                                <p>(2009)</p>
                            </div>
                        </div>
                    </div>
                    <div className=' m-2 flex-1' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-medium mb-3'>Weather</h6>
                        <div className='flex '>
                            <i className='bx bxs-sun text-xl' style={{ color: "#FFDC64" }}></i>
                            <p className='mx-2 font-medium'>HIGH-29C</p>
                        </div>
                        <div className='flex'>
                            <i className='bx bxs-cloud text-xl' style={{ color: "#D8ECFE" }}></i>
                            <p className='mx-2 font-medium'>LOW-19C</p>
                        </div>
                    </div>
                    <div className=' p-2 flex-1'>
                        <h6 className='font-medium mb-3'>SAFETY</h6>
                        <div className='flex items-center'>
                            <i className='bx bxs-star text-xl' style={{ color: "#FFDC64" }} ></i>
                            <p className='font-bold mx-2'>4.8</p>
                        </div>
                    </div>

                </div>


                {/* featured photoes */}
                <div className='grid grid-cols-2 grid-rows-2 gap-4 w-full  featured-photo '>
                    <div className='col-span-2'>
                        <img className='w-full rounded-lg' src="https://www.albomadventures.com/wp-content/uploads/2019/01/Paraty-Brazil-280100.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-full rounded-lg' src="https://www.albomadventures.com/wp-content/uploads/2019/01/Paraty-Brazil-280100.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-full rounded-lg' src="https://www.albomadventures.com/wp-content/uploads/2019/01/Paraty-Brazil-280100.jpg" alt="" />
                    </div>
                </div>

                {/* monthly spend fo r familly of 4 */}
                <h4 className='font-medium text-2xl text-left  mt-12' style={{ color: "#565656" }}>Mothly spend for a family of 4</h4>
                <div className='flex border rounded-md justify-between p-3 text-left mt-3' >
                    <div className='p-4 flex-1 ' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-bold text-xl mb-3' style={{ color: " rgba(0, 0, 0, 0.4)" }}>RENT</h6>
                        <div className='flex my-2 ' >
                            <i className='bx bx-dollar text-lg font-bold ' ></i>
                            <p className='font-medium text-2xl mb-3'>18,000</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>This is for a 3 bedroom(40Sqm) within city center.</p>
                    </div>
                    <div className=' p-4 flex-1' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-bold mb-3 text-xl' style={{ color: " rgba(0, 0, 0, 0.4)" }}>GROCARIES</h6>
                        <div className='flex my-2 '>

                            <i className='bx bx-dollar text-xl font-bold ' ></i>
                            <p className='font-medium mb-3 text-2xl'>1600</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>The average cost of Groceries for a family of 4.</p>
                    </div>
                    <div className=' p-4 flex-1 ' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-bold mb-3 text-xl' style={{ color: " rgba(0, 0, 0, 0.4)" }}>GROCARIES</h6>
                        <div className='flex my-2 '>

                            <i className='bx bx-dollar text-xl font-bold ' ></i>
                            <p className='font-medium mb-3 text-2xl'>2200</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>The average cost of Groceries for a family of 4.</p>
                    </div>
                    <div className=' p-4 flex-1'>
                        <h6 className='font-bold mb-3 text-xl' style={{ color: " rgba(0, 0, 0, 0.4)" }}>GROCARIES</h6>
                        <div className='flex my-2 '>

                            <i className='bx bx-dollar font-bold text-xl ' ></i>
                            <p className='font-medium mb-3 text-2xl'>5600</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>The average cost of Groceries for a family of 4.</p>
                    </div>

                </div>

                {/* /* monthly spend fo r familly of 4 */}
                <h4 className='font-medium text-2xl text-left  mt-12' style={{ color: "#565656" }}>Mothly spend for an individual</h4>

                <div className='flex border rounded-md justify-between p-3 text-left mt-3' >
                    <div className='p-4 flex-1 ' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-bold text-xl mb-3' style={{ color: " rgba(0, 0, 0, 0.4)" }}>RENT</h6>
                        <div className='flex my-2 ' >
                            <i className='bx bx-dollar text-lg font-bold ' ></i>
                            <p className='font-medium text-2xl mb-3'>18,000</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>This is for a 3 bedroom(40Sqm) within city center.</p>
                    </div>
                    <div className=' p-4 flex-1' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-bold mb-3 text-xl' style={{ color: " rgba(0, 0, 0, 0.4)" }}>GROCARIES</h6>
                        <div className='flex my-2 '>

                            <i className='bx bx-dollar text-xl font-bold ' ></i>
                            <p className='font-medium mb-3 text-2xl'>1600</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>The average cost of Groceries for a family of 4.</p>
                    </div>
                    <div className=' p-4 flex-1 ' style={{ borderRight: ".25px solid #ddd" }}>
                        <h6 className='font-bold mb-3 text-xl' style={{ color: " rgba(0, 0, 0, 0.4)" }}>GROCARIES</h6>
                        <div className='flex my-2 '>

                            <i className='bx bx-dollar text-xl font-bold ' ></i>
                            <p className='font-medium mb-3 text-2xl'>2200</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>The average cost of Groceries for a family of 4.</p>
                    </div>
                    <div className=' p-4 flex-1'>
                        <h6 className='font-bold mb-3 text-xl' style={{ color: " rgba(0, 0, 0, 0.4)" }}>GROCARIES</h6>
                        <div className='flex my-2 '>

                            <i className='bx bx-dollar font-bold text-xl ' ></i>
                            <p className='font-medium mb-3 text-2xl'>5600</p>
                        </div>
                        <p className='text-sm' style={{ color: "#565656" }}>The average cost of Groceries for a family of 4.</p>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default DestinationStat;