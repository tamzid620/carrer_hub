import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div class="navbar  bg-pink-100 pt-5">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className='ms-8 text-black' to='/'>Home</Link>
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
                    <h3 className='text-4xl font-semibold text-pink-500'><span className='text-black'>D</span>ash <span className='text-black'>p</span>rofession</h3>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        
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
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;