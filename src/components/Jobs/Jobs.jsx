import React, { useEffect, useState } from 'react';
import './Jobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import Details from '../Details/Details';

const Jobs = ({job,handleClick}) => {
const { image, jobTitle , dutyType, dutyTime, companyName, location, salary , id} = job;
    
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
            <button onClick={()=> handleClick(id)} className='rounded-lg bg-pink-500 text-white mt-3'>View Details</button>
        </div>
       
    );
};
export default Jobs;