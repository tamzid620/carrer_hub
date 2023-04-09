import React from 'react';
import './List.css'

const List = ({list}) => {
    const {icon, name, info} = list;
    return (
        <div className='list bg-pink-100 p-4 rounded-lg ml-auto mr-auto mb-4 '>
            <img src={icon} alt="" />
            <p>{name}</p>
            <p>{info}</p>
        </div>
    );
};

export default List;