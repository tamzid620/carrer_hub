import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Details from './components/Details/Details';
import AppliedJobs from './components/appliedJobs/appliedJobs';
import { applyJobsData } from './Loader/getJobdata';


// router section -------------------



const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [  
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/lists.json'),    
      },
      {
        path:'statistics' ,
        element: <Statistics></Statistics>
      },
      {
        path:'/appliedJobs' ,
        element: <AppliedJobs></AppliedJobs>,
        // loader: applyJobsData,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'details/:blogid',
        element: <Details></Details>,
      },
    ]
  },
]);



// render section --------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1440px] h-screen mx-auto'>
    <RouterProvider  router={router} />
    </div>
  </React.StrictMode>,
)
