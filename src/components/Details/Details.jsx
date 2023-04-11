import React, { useEffect, useState } from 'react';
import DetailInfo from '../DetailInfo/DetailInfo';
import { useLoaderData  } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const Details = () => {
    const details = useLoaderData();
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

// --------------------

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
// import Jobs from '../Jobs/Jobs';
// import DetailInfo from '../DetailInfo/DetailInfo';

// const Details = ({ job }) => {
//     const { description, responsibilities, educational_requirements, experience } = job
//     const { id } = useParams();
//     const details = useLoaderData();
//     const [jobDetails, setJobDetails] = useState({});

//     useEffect(() => {
//         const job = details.find(job => job.id === id);
//         if (job) {
//             setJobDetails(job);
//         }
//     }, [id, details]);

//     return (
//         <div>
//             <h2 className='text-2xl font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10'>
//                 Job Details
//             </h2>
//             <div>
//                 <Jobs job={jobDetails} />
//                 <DetailInfo job={jobDetails} />
//             </div>
//             <div>
//                 <div>
//                     <p><span className='font-semibold'>Job Description</span>:{description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;

