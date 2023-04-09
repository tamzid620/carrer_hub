import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex justify-between pt-5 bg-pink-100'>
            <div>
                <h3 className='text-4xl font-semibold text-pink-500'><span className='text-black'>D</span>ash <span className='text-black'>p</span>rofession</h3>
            </div>

            <div className='text-2xl'>
                <Link className='text-black' to='/statistics'>Statistics</Link>
                <Link className='ms-8 text-black' to='/appliedJobs'>Applied Jobs</Link>
                <Link className='ms-8 text-black' to='/blog'>Blog</Link>
            </div>

            <div>
                <Link to='/Star Applying'>
                    <button className='rounded-full bg-pink-500 text-white'>Star Applying</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;