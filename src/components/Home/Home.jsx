import React from 'react';
import { useLoaderData } from 'react-router-dom';
import List from '../List/List';

const Home = () => {
    const lists = useLoaderData()
    return (
        <div>
{/* DP section------------------ */}
            <div  className='grid sm:grid-cols-1  lg:grid-cols-2  items-center justify-center bg-pink-100'>
                <div>
                    <h1 className='text-7xl text-left font-semibold mb-5'>One Step <br /> Closer To Your <br /> <span className='text-pink-600'> Dream Job</span></h1>
                    <p className='text-gray-400 text-start'>A highly creative thinker, grammar Nazi, and social media <br /> enthusiast seek the position of Social Media & <br /> Content Marketing Analyst to transform technical <br /> and digital information and processes into influencial stories.</p>
                </div>
                <div className='dp'>
                    <img src="../../../assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
{/* Job catagory list ---------------------- */}
            <div className='mt-16'>
                <h1 className='font font-semibold  text-black mb-3'>Job Category List</h1>
                <p className='text-gray-400 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
{/* ------------lists---------- */}
                    <div className='grid sm:grid-cols-1 lg:grid-cols-4  mb-28'>
                        {
                            lists.map(list => <List
                                key={list.id}
                                list ={list}
                            ></List>)
                        }
                    </div>
            </div>
{/*---------- Featured Jobs ------------------*/}
            <div>
            <h1 className='font font-semibold  text-black'>Featured Jobs</h1>
                <p className='text-gray-400 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
        </div>
    );
}

export default Home;