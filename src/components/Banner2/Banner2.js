import React from 'react';
import './Banner2.css'
import arrow from '../../assets/arrow.png'
import cycle from '../../assets/cycle.png'

const Banner2 = () => {
    return (
        <div className='banner2 grid grid-cols-1 lg:grid-cols-2 py-24'>


            <div className='mx-4 md:mx-16 lg:mx-0  lg:ml-[100px]'>
                <h2 className=' banner2-heading'>Explore your <br />
                    favourite city’s food.</h2>
                <p className=' text-[#3F3F3F]'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>

                <button className='explore-btn mt-3 px-14 py-3'>
                    Explore
                    <img className='inline-block ml-3' src={arrow} alt="" />

                </button>
            </div>


            <div className='city mx-4 sm:mx-0'>


                <img className='cycle' src={cycle} alt="" />

            </div>

        </div>
    );
};

export default Banner2;