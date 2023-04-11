import React, { useEffect, useState } from 'react';
import DetailInfo from '../DetailInfo/DetailInfo';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    return (
        <div>
            <h2 className='text-2xl font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10'>Job Details</h2>
            <div>
                <div>
                    {
                        details.map(detail => <DetailInfo
                        key={detail.id}
                        detail={detail}
                        ></DetailInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;