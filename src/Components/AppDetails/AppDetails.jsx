import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import appImage from '../../assets/Apple-App-Store-Awards-2022-Trophy_inline.jpg.slideshow-large_2x.jpg';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleData = data.find(app => app.id === appId);

    if (!singleData) {
        return <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-dots loading-lg"></span>
        </div>;
    }

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
        <div className='p-20 bg-[#D2D2D250]'>
            <div className="flex gap-10 border-b-1 pb-10 border-gray-300">
                <div>
                    <img
                        className='h-[350px] w-[350px] object-cover rounded-xl'
                        src={appImage}
                        alt={singleData.title}
                    />
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>{singleData.title}</h1>
                    <p className='text-xl text-gray-400 font-bold mt-2'>
                        Developed by <span className='text-violet-500'>{singleData.companyName}</span>
                    </p>

                    <div className="mt-8 pt-8 w-full flex gap-28 border-t-1 border-gray-300">
                        <div>
                            <img className='h-10 w-10 m-0' src={download} alt="" />
                            <p className='mt-2'>Downloads</p>
                            <p className='text-[40px] font-extrabold'>{formatDownloads(singleData.downloads)}</p>
                        </div>
                        <div>
                            <img className='h-10 w-10 m-0' src={rating} alt="" />
                            <p className='mt-2'>Average Rating</p>
                            <p className='text-[40px] font-extrabold'>{singleData.ratingAvg}</p>
                        </div>
                        <div>
                            <img className='h-10 w-10 m-0' src={review} alt="" />
                            <p className='mt-2'>Total Reviews</p>
                            <p className='text-[40px] font-extrabold'>{formatDownloads(singleData.reviews)}</p>
                        </div>
                    </div>

                    <button className='btn px-5 py-[22px] bg-green-400 text-white mt-8 text-xl'>
                        Install Now ({singleData.size}MB)
                    </button>
                </div>
            </div>


            <div className="border-b-1 py-10 pb-16 border-gray-300 h-[550px]">
                <p className='text-xl font-bold my-5'>Ratings</p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={[...singleData.ratings].reverse()}
                        margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis
                            dataKey="name"
                            type="category"

                        />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#00C49F" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-2">Description</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{singleData.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
