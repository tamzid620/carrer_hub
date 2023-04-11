import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ applyjob }) => {
    const { image, jobTitle, dutyType, dutyTime, companyName, location, salary } = applyjob;
    const handleClick = () => {
        window.location.href = "/";
    };
    return (
            <div className='review-item border rounded-lg drop-shadow-lg flex justify-between items-center mr-auto'>
                <div className='flex'>
                    <img src={image} alt="" />
                    <div className=' justify-center ml-3 text-left mt-3'>
                        <h3 className='jobTitle'>{jobTitle}</h3>
                        <p className='companyName'>{companyName}</p>
                        <div className='flex gap-3'>
                            <div><button className='text-pink-500 border-pink-400'>{dutyType}</button></div>
                            <div><button className='text-pink-500 border-pink-400'>{dutyTime}</button></div>
                        </div>
                        <div className='flex mt-3'>
                            <p className='location'> <FontAwesomeIcon icon={faLocationArrow} /> {location}</p>
                            <p className='salary ml-5'> <FontAwesomeIcon icon={faSackDollar} /> salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleClick} className='rounded-lg bg-pink-500 text-white mt-3 mr-3'>View Details</button>
                </div>
            </div>
    );
};

export default ReviewItem;