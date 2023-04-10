import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-pink-400 font-semibold text-7xl mb-10 mt-5'>Question <span className='text-black'>and</span> Answer</h2>
            <div className='text-left'>
            <h2 className='font-semibold text-green-500 text-2xl'>1.When should you use context API?</h2>
            <p className='font-semibold  text-2xl text-red-600'>A: we use Context API, when we need to pass data down the component tree without having  explicitly pass props at every level. It allows us  to provide global data that can be accessed by any component in the tree</p>

            <br />

            <h2 className='font-semibold text-green-500 text-2xl'>2.What is custom hook?</h2>
            <p className='font-semibold  text-2xl text-red-600'>A: custom hook is a JavaScript function that uses one or more React hooks to implement a specific behavior, which can be reused across different components in a React application.</p>

            <br />

            <h2 className='font-semibold text-green-500 text-2xl'>3.What is useRef?</h2>
            <p className='font-semibold  text-2xl text-red-600'>A: useRef is a hook in React, a JavaScript library for building user interfaces. It returns a mutable object that can be used to store a value that persists between renders of a component.</p>

            <br />

            <h2 className='font-semibold text-green-500 text-2xl'>4.What is useMemo?</h2>
            <p className='font-semibold  text-2xl text-red-600'>A: useMemo is a hook in React, a JavaScript library for building user interfaces. It is used for memoization, which is a technique that helps improve performance by caching the results of a function call and returning the cached value when the inputs to the function haven't changed.</p>
            </div>
        </div>
    );
};

export default Blog;