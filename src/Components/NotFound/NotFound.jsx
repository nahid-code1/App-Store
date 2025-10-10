import React from 'react';
import error from '../../assets/error-404.png'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='inter flex flex-col justify-center items-center h-screen text-center'>
            <img src={error} alt="" />
            <p className='text-5xl font-bold'>Oops, page not found!</p>
            <p className='text-[#627382] mt-4'>The page you are looking for is not available.</p>
            <button onClick={() => navigate(-1)} className='btn btn-secondary mt-5'>Go Back</button>
        </div>
    );
};

export default NotFound;
