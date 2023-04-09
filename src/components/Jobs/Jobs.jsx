import React from 'react';
import './Jobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const Jobs = ({job}) => {
    const { jobTitle ,image, dutyType, dutyTime, companyName, location, salary }= job;
    return (
        <div className='job p-4 text-left border mb-5 rounded-lg ml-auto mr-auto '>
            <img src={image} alt="" />
            <h2 className='jobTitle'>{jobTitle}</h2>
            <h3 className='companyName'>{companyName}</h3>
            <div className='flex gap-3 mt-3'>
                <div><button className='text-pink-500 border-pink-400'>{dutyType}</button></div>
                <div><button className='text-pink-500 border-pink-400'>{dutyTime}</button></div>
            </div>
            <div className='flex  mt-3'>
            <p className='location'> <FontAwesomeIcon icon={faLocationArrow} /> {location}</p>
            <p className='salary ml-5'> <FontAwesomeIcon icon={faSackDollar} /> salary: {salary}</p>
            </div>
            <button className='rounded-lg bg-pink-500 text-white mt-3'>View Details</button>
        </div>
    );
};

export default Jobs;