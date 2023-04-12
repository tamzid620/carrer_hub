import React from 'react';
import './DetailInfo.css'
import { addToDb } from '../../utilities/fakeDB';

const DetailInfo = ({job}) => {
    const{description, responsibilities, educational_requirements, experience, jobTitle , location, salary , phone , email , id} =job

    

    const handleToLocal = id => {
        addToDb(id)

    };

    return (
        <div className='flex pl-20 pr-20'>
            <div className=' description  pr-10'>
                <p><span className='font-semibold'>Job Description:</span> {description}</p>
                <p><span className='font-semibold'>Job Responsibility:</span> {responsibilities}</p>
                <p><span className='font-semibold'>Educational Requirements: <br /></span> {educational_requirements}</p>
                <p><span className='font-semibold'>Experiences: <br /></span> {experience}</p>
            </div>
            <div className='detail'>
                <div className='border  pl-5 pr-5'>                
                <h3 className='font-semibold'>Job Details</h3>
                <hr />
                <p><span className='font-semibold'>Salary:</span> {salary}</p>
                <p><span className='font-semibold'>Job Title:</span> {jobTitle}</p>
                <h3 className='font-semibold'>Contact Information</h3>
                <hr />
                <p><span className='font-semibold'>Phone:</span> {phone}</p>
                <p><span className='font-semibold'>E-Mail:</span> {email}</p>
                <p><span className='font-semibold'>Address:</span> {location}</p>
                </div>
                <button onClick={()=> handleToLocal(id)} className='btn-apply  flex justify-center items-center mt-2 mb-5 bg-pink-300 text-white ' >Apply Now</button>
            </div>
        </div>
    );
};

export default DetailInfo;
