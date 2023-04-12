import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import List from '../List/List';
import Jobs from '../Jobs/Jobs';
import './Home.css'

const Home = () => {
    const lists = useLoaderData()
    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const handleClick = id => {
        window.location.href = `details/${id}`;
    };

    const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 4);

    return (
        <div>
            {/* Banner/DP section------------------ */}
            <div className='grid sm:grid-cols-1  lg:grid-cols-2  items-center justify-center   pl-5  banner'>
                <div className=''>
                    <h1 className='text-7xl text-left font-semibold mb-5'>One Step <br /> Closer To Your <br /> <span className='text-pink-600'> Dream Job</span></h1>
                    <p className='text-gray-400 text-start'>A highly creative thinker, grammar Nazi, and social media <br /> enthusiast seek the position of Social Media & <br /> Content Marketing Analyst to transform technical <br /> and digital information and processes into influencial stories.</p>
                    <button className='rounded-lg mt-5 bg-pink-500 text-white flex justify-start'>Get Started</button>
                </div>
                <div className='dp'>
                    <a href="https://ibb.co/hZLWpSH"><img src="https://i.ibb.co/vQVP2Sm/P3-OLGJ1-copy-1.png" alt="P3-OLGJ1-copy-1" border="0" /></a>"
                </div>
            </div>
            {/* Job catagory list ---------------------- */}
            <div className='mt-16'>
                <h1 className='font font-semibold  text-black mb-3 text-center'>Job Category List</h1>
                <p className='text-gray-400 mb-5 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                {/* ------------Job  lists---------- */}
                <div className='grid sm:grid-cols-1 lg:grid-cols-4  mb-28'>
                    {
                        lists.map(list => <List
                            key={list.id}
                            list={list}
                        ></List>)
                    }
                </div>
            </div>
            {/*---------- Featured Jobs ------------------*/}
            <div className=''>
                <h1 className='font font-semibold  text-black text-center'>Featured Jobs</h1>
                <p className='text-gray-400 mb-5 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                {/*---------- Featured Jobs list------------------*/}
                <div className=' grid sm:grid-cols-1 lg:grid-cols-2 justify-center '>
                    {
                        displayedJobs.map(job => <Jobs
                            key={job.id}
                            job={job}
                            handleClick={handleClick}
                        ></Jobs>)
                    }
                </div>
                <div className='flex justify-center'>
                {!showAllJobs && (<button className='rounded-full w-32  bg-pink-500 text-white mb-10 ' onClick={() => setShowAllJobs(true)}>See All Jobs</button>)}
                </div>
            </div>

        </div>
    );
}

export default Home;

