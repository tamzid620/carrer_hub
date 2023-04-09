import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/appliedJobs/appliedJobs';
import Blog from './components/Blog/Blog';

// router section -------------------



const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children: [  
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('lists.json')
      },
      {
        path:'statistics' ,
        element: <Statistics></Statistics>
      },
      {
        path:'appliedJobs' ,
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);



// render section --------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
