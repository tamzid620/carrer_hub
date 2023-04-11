import React, { useEffect, useState } from 'react';
// import ReviewItem from '../ReviewItem/ReviewItem';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakeDB';


const AppliedJobs = () => {
    const applyjobs = useLoaderData()

    let job = []
    const savedJob = getStoredCart()
    for(const id in savedJob){
        const findJob = applyjobs.find(apply => apply.id ===id)
        if(findJob){
            findJob.quantity = savedJob[id]
            job.push(findJob)
        }
    }

    return (
        <div>
            <h2 className='text-2xl font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10'>Applied Jobs</h2>
            <div className=' text-right mb-2 mr-48'>
                <div class="dropdown dropdown-left">
                    <label tabindex="0" class="btn m-1  bg-pink-500">Filter By</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 bg-pink-200">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className='review-container'>
                {/* {
                    applyjobs.map(applyjob => <ReviewItem
                        key={applyjob.id}
                        applyjob={applyjob}
                    >
                    </ReviewItem>)
                } */}
                <div>job</div>
            </div>
        </div>
    );
};

export default AppliedJobs;