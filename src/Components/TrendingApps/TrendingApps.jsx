import React from 'react';
import appImage from '../../assets/Apple-App-Store-Awards-2022-Trophy_inline.jpg.slideshow-large_2x.jpg'
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link, NavLink } from 'react-router';

const TrendingApps = ({ trendingData }) => {

    const formatDownloads = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M+';
        }
        if (num >= 1000) {
            return Math.floor(num / 1000) + 'K+';
        }
        return num.toString();
    };

    return (
        <div>
            <div className="text-center p-20 inter">
                <p className='text-5xl font-extrabold'>Trending Apps</p>
                <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {
                    trendingData.map((data) => {
                        return (

                            <NavLink to={`/details/${data.id}`}>  <div key={data.id} className="card bg-base-100 w-96 shadow-sm hover:bg-gray-200 cursor-pointer transform transition duration-300 hover:scale-102">
                                <figure>
                                    <img className=' p-3 rounded-2xl'
                                        src={data.image || appImage}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {data.title}
                                        <div className="badge badge-secondary">Trending</div>
                                    </h2>

                                    <div className="card-actions justify-between">
                                        <div className="bg-[#f1f5e8] p-2 rounded-lg text-[#00d390] font-bold text-[16px] flex items-center">
                                            <img className='h-4 w-4 mr-1' src={download} alt="" />
                                            {formatDownloads(data.downloads)}
                                        </div>
                                        <div className="bg-[#fff0e1] p-2 rounded-lg font-me text-[16px] flex items-center ">
                                            <img className='h-4 w-4 mr-1' src={rating} alt="" />{data.ratingAvg}</div>
                                    </div>
                                </div>
                            </div></NavLink>

                        )
                    })

                }

            </div>
            <Link to='/apps'><button className='btn btn-primary block mx-auto mt-10 text-sm'>Show All</button></Link>
        </div>
    );
};

export default TrendingApps;