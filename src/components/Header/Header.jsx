import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div className="navbar  bg-pink-100 pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className='ms-8 text-black' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className=' ms-8 text-black' to='/statistics'>Statistics</Link>
                            </li>
                            <li>
                            <Link className='ms-8 text-black' to='/appliedJobs'>Applied Jobs</Link>
                            </li>
                            <li>
                                <Link className='ms-8 text-black' to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <h3 className='text-4xl font-semibold text-pink-500'><span className='text-black'>D</span>ash<span className='text-black'>h</span>ub</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                        <li>
                            <Link className='text-black' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='text-black' to='/statistics'>Statistics</Link>
                        </li>
                        <li>
                            <Link className='ms-8 text-black' to='/appliedJobs'>Applied Jobs</Link>
                        </li>
                        <li>
                            <Link className='ms-8 text-black' to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-lg mt-5 bg-pink-500 text-white">Star Applying</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;