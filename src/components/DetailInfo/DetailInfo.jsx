import React from 'react';

const DetailInfo = ({detail}) => {
    const{description, responsibilities, educational_requirements, experience} =detail
    return (
        <div>
            <div>
                <p><span className='font-semibold'>Job Description</span>: {description}</p>
                <p></p>
            </div>
        </div>
    );
};

export default DetailInfo;