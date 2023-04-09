import React from 'react';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom'
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';


const Layout = () => {
    const jobs = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='allJob grid sm:grid-cols-1 lg:grid-cols-2 justify-center '>
            {
                jobs.map(job => <Jobs
                key={job.id}
                job ={job}
                ></Jobs>)
            }
            </div>
            <button className='rounded-full bg-pink-500 text-white mb-10'>See All Jobs</button>
        </div>
    );
};

export default Layout;