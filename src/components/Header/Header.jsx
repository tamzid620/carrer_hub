import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex justify-between mt-5'>
            <div>
                <h3 className='text-4xl font-semibold'>Dash profession</h3>
            </div>

            <div className='text-2xl'>
                <Link className='text-black' to='/statistics'>Statistics</Link>
                <Link className='ms-8 text-black' to='/appliedJobs'>Applied Jobs</Link>
                <Link className='ms-8 text-black' to='/blog'>Blog</Link>
            </div>

            <div>
                <Link to='/Star Applying'><button>Star Applying</button></Link>
            </div>
        </nav>
    );
};

export default Header;