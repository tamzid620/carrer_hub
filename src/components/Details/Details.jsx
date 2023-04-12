import React, { useEffect, useState } from 'react';
import DetailInfo from '../DetailInfo/DetailInfo';
import { useLoaderData, useParams } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const Details = () => {
  // const details = useLoaderData();
  const { detailsid } = useParams();
  console.log(detailsid);

  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJob(data.find(a => a.id == detailsid))
      });
  }, [detailsid]);


  return (
    <div>
       <h2 className='text-2xl flex justify-center font-semibold text-pink-400 pt-20 pb-5 bg-pink-100 mb-10'>Job Details</h2>
      <div>
        <div>
          <DetailInfo
            key={job.id}
            job={job}
          ></DetailInfo>
        </div>
      </div>
    </div>
  );
};

export default Details;
