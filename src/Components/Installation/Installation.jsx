import React from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import appImage from '../../assets/Apple-App-Store-Awards-2022-Trophy_inline.jpg.slideshow-large_2x.jpg'

const Installation = () => {
    return (
        <div className='p-20 bg-[#D2D2D250]'>
            <div className="text-center">
                <p className='text-5xl font-bold'>Your Installed Apps</p>
                <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="">
                <div className="">
                    <p className='text-2xl font-semibold'>1 App Found</p>
                </div>
                <div className="my-8 bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex gap-4 items-center">
                        <img className='h-20 w-20 object-cover rounded-2xl' src={appImage} alt="" />
                        <div>
                            <p className='text-xl font-medium'>Forest</p>
                            <div className="flex items-center mt-4">
                                <img className='h-4 w-4' src={download} alt="" />
                                <p className='text-[#00d390] ml-1'>9M</p>
                                <img className='h-4 w-4 ml-4' src={rating} alt="" />
                                <p className='text-orange-500 ml-1'>5</p>
                                <p className='text-[#00d390] ml-4'>258 MB</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-secondary'>Uninstall</button>
                </div>

            </div>
        </div>
    );
};

export default Installation;