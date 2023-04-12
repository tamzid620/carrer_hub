// import React, { useEffect, useState } from 'react';
// import ReviewItem from '../ReviewItem/ReviewItem';
// import './AppliedJobs.css'
// import { getStoredJob } from '../../utilities/fakeDB';


// const AppliedJobs = () => {
//     const data = getStoredJob()

//     return (
//         <div>
//             <h2 className=' flex justify-center text-2xl font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10'>Applied Jobs</h2>
//             <div className=' text-right mb-2 mr-48'>
//                 <div className="dropdown dropdown-left">
//                     <label tabIndex="0" className="btn m-1  bg-pink-500">Filter By</label>
//                     <ul tabIndex="0" className="dropdown-content menu p-2 shadow  rounded-box w-52 bg-pink-200">
//                         <li><a>Item 1</a></li>
//                         <li><a>Item 2</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className='review-container'>
//                 {/* {
//                     data.map(job => <ReviewItem
//                     key={job.id}
//                     job={job}
//                     ></ReviewItem>)
//                 } */}
//                 <h3>data: {data.length}</h3>
//             </div>
//         </div>
//     );
// };

// export default AppliedJobs;
// ===================================================

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { getStoredJob } from "../../utilities/fakeDB";

const  AppliedJob = () => {
  const storeData = getStoredJob();
  console.log(storeData);

  const [job, setJob] = useState([]);
  const [appliedData, setAppliedData] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, []);

  useEffect(() => {
    if (job && storeData.length) {
      setAppliedData(
        storeData?.map((element) => {
          return {
            quantity: element?.quantity,
            ...job?.find((a) => a?.id == element.id),
          };
        })
      );
    }
  }, [job]);

  console.log(appliedData);

  const handleClick = () => {
    window.location.href = "details";
  };

  return (
    <div>
      <h2 className=" flex justify-center text-2xl font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10">
        Applied Jobs
      </h2>
      <div className=" text-right mb-2 mr-48">
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="btn m-1  bg-pink-500">
            Filter By
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow  rounded-box w-52 bg-pink-200"
          >
            <li>
              <a>Show Remote Jobs</a>
            </li>
            <li>
              <a>Show Ontime Jobs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="review-container">
        {appliedData?.map((item) => {
          return (
            <div className="review-item border rounded-lg drop-shadow-lg flex justify-between items-center mr-5 ml-5 mb-10">
              <div className="flex">
                <div><img className="h-[100px] w-[100px] mt-5 ml-2" src={item?.image} alt="" /></div>
                <div className=" justify-center ml-5 text-left mt-3">
                  <h3 className="jobTitle">{item?.jobTitle}</h3>
                  <p className="companyName">{item?.companyName}</p>
                  <div className="flex gap-3">
                    <div>
                      <button className="bg-pink-300">
                        {item?.dutyType}
                      </button>
                    </div>
                    <div>
                      <button className='bg-pink-300'>
                        {item?.dutyTime}
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    <p className="location">
                      {" "}
                      <FontAwesomeIcon icon={faLocationArrow} />{" "}
                      {item?.location}
                    </p>
                    <p className="salary ml-5">
                      {" "}
                      <FontAwesomeIcon icon={faSackDollar} /> salary:{" "}
                      {item?.salary}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={handleClick} className="bg-pink-300 mr-5 text-white ">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppliedJob;