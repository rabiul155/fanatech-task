import React from 'react';
import './Navbar.css'
import cart from '../../assets/Vector (2).png';
import logo from '../../assets/FoodTime.png';
import clip from '../../assets/Vector.png';

const Navbar = () => {

    const menuItem =

        <>
            <li><a className='nav-text'>Home</a></li>
            <li><a className='nav-text'>Blog</a></li>
            <li><a className='nav-text'>About Us</a></li>

            <li tabIndex={0}>
                <a className='nav-text'>
                    EN
                    <svg className="fill-current -ml-3" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-1">
                    <li><a className='nav-text'>BN</a></li>
                    <li><a className='nav-text'>EN</a></li>
                </ul>
            </li>

        </>
    return (
        <div>
            <div className="navbar  navbar-info">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <a className="btn nav-title relative btn-ghost normal-case text-xl">
                        FoodTime
                        <img className='absolute top-0 right-0' src={clip} alt="" srcset="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="login-btn px-[50px] py-[12px]">Login</button>
                    <button className="cart-btn flex justify-center items-center">
                        <img src={cart} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;