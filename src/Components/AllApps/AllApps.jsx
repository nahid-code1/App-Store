import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import appImage from '../../assets/Apple-App-Store-Awards-2022-Trophy_inline.jpg.slideshow-large_2x.jpg'
import appError from '../../assets/App-Error.png'

const AllApps = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/allAppData.json')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setAllData(data);
                    setLoading(false);
                }, 500);
            })
            .catch(() => setLoading(false));
    }, []);

    const term = search.trim().toLocaleLowerCase();
    const searchedProducts = term ? allData.filter(data => data.title.toLocaleLowerCase().includes(term)) : allData;

    const formatDownloads = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
        if (num >= 1000) return Math.floor(num / 1000) + 'K+';
        return num.toString();
    };

    if (loading) return <div className="flex justify-center items-center h-[60vh]"><span className="loading loading-dots loading-lg"></span></div>;

    return (
        <div className='bg-[#D2D2D250] p-20'>
            <div className="text-center inter ">
                <p className='text-5xl font-bold'>Our All Application</p>
                <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="my-5 flex justify-between items-center">
                <p className='text-2xl font-semibold'><span>{searchedProducts.length}</span> Apps Found</p>
                <label className="input">
                    <input type="search" value={search} onChange={e => setSearch(e.target.value)} required placeholder="Search" />
                </label>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {searchedProducts.length === 0 ? (
                    <div className="col-span-4 flex flex-col justify-center items-center mt-10">
                        <img className='w-64 mb-6' src={appError} alt="" />
                        <p className="text-center text-5xl font-bold text-gray-500">No apps found</p>
                    </div>
                ) : (
                    searchedProducts.map((data) => (
                        <NavLink key={data.id} to={`/details/${data.id}`}>
                            <div className="card bg-base-100 w-[350px] shadow-sm hover:bg-gray-200 cursor-pointer transform transition duration-300 hover:scale-102">
                                <figure>
                                    <img className='p-3 rounded-2xl' src={appImage} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.title}</h2>
                                    <div className="card-actions justify-between">
                                        <div className="bg-[#f1f5e8] p-2 rounded-lg text-[#00d390] font-bold text-[16px] flex items-center">
                                            <img className='h-4 w-4 mr-1' src={download} alt="" />
                                            {formatDownloads(data.downloads)}
                                        </div>
                                        <div className="bg-[#fff0e1] p-2 rounded-lg font-me text-[16px] flex items-center ">
                                            <img className='h-4 w-4 mr-1' src={rating} alt="" />
                                            {data.ratingAvg}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllApps;
