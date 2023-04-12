import React, { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import './AppliedJobs.css'
import { getStoredJob } from '../../utilities/fakeDB';


const AppliedJobs = () => {
    const data = getStoredJob()
    console.log(data)

    return (
        <div>
            <h2 className=' flex justify-center text-2xl font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10'>Applied Jobs</h2>
            <div className=' text-right mb-2 mr-48'>
                <div className="dropdown dropdown-left">
                    <label tabIndex="0" className="btn m-1  bg-pink-500">Filter By</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow  rounded-box w-52 bg-pink-200">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className='review-container'>
                {/* {
                    data.map(job => <ReviewItem
                    key={job.id}
                    job={job}
                    ></ReviewItem>)
                } */}
                <h3>data: {data.length}</h3>
            </div>
        </div>
    );
};

export default AppliedJobs;