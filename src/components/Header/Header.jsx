import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div>
                <h3>Dash profession</h3>
            </div>
            <div>

            </div>
            <div>

            </div>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedJobs'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
            <Link to ='/Star Applying'><button>Star Applying</button></Link>
        </nav>
    );
};

export default Header;