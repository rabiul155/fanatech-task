import React from 'react';
import './Banner.css'
import leaf from '../../assets/leaf.png'
import leaf2 from '../../assets/leaf2.png'
import search from '../../assets/search.png'
import Ellipse from '../../assets/Ellipse 1.png'
import tikmark from '../../assets/Vector (1).png'
import plate1 from '../../assets/plate.png'
import plate2 from '../../assets/plate2.png'

const Banner = () => {
    return (
        <div className='banner grid grid-cols-1 lg:grid-cols-2'>

            <div>
                {/* left leaf section */}
                <div className='left-leaf'>
                    <img src={leaf} alt="" />
                </div>


                {/* banner text seciton  */}
                <div className='banner-text'>
                    <h2 > Order food online <br />
                        from your favourite <br />
                        local restaurants<span className='text-[#FF8B00]'>.</span></h2>
                    <div>
                        <h4 className='text-2xl'>Freshly made food delivered to your door.</h4>
                    </div>
                </div>




                {/* seachbar setion  */}
                <div className=' search-section'>
                    <div className=' search-box'>
                        <input type="text" placeholder="Enter Your Location" className="input input-bordered  " />
                        <img src={Ellipse} alt="" />
                        <button className='search-btn px-16 py-4'>
                            <img className=' inline-block mr-4' src={search} alt="" />
                            Search</button>
                    </div>
                </div>
            </div>

            {/* right side section  */}
            <div className=' right-side-section'>

                <div>
                    <img className='plate1' src={plate1} alt="" />
                </div>
                <div>
                    <img className='plate2' src={plate2} alt="" />
                </div>
                <div>
                    <img className='leaf2' src={leaf2} alt="" />
                </div>


                <div className=' delivery-card'>
                    <div className='flex justify-start items-center'>
                        <img src={tikmark} alt="" />
                        <h3>200k+</h3>
                    </div>
                    <p className='text-sm'>People Delivered</p>
                </div>

            </div>

        </div>
    );
};

export default Banner;