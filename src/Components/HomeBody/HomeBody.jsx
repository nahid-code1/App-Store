import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import hero from '../../assets/hero.png'
import { Link, useLoaderData } from 'react-router';
import Banner from '../Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';

const HomeBody = () => {
    const trendingData = useLoaderData()


    return (
        <div className=''>
            <div className=" flex-row text-center justify-center pt-20 bg-[#D2D2D250]">
                <p className='text-7xl font-semibold'>We Build <br /><span className='font-bold text-violet-500'>Productive</span> Apps</p>
                <p className='text-[#627382] leading-8 mt-4 text-xl'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="mt-10 space-x-4">
                    <Link to='https://play.google.com/store/games?hl=en&pli=1'><button className=" btn btn-lg p-8">  <FontAwesomeIcon icon={faGooglePlay} size="2x" />Google Play</button></Link>
                    <Link to='https://www.apple.com/app-store/'><button className=" btn btn-lg p-8"><FontAwesomeIcon icon={faAppStore} size="2x" />App Store</button></Link>
                </div>
                <div className="flex justify-center mt-10">
                    <img src={hero} alt="" />
                </div>
            </div>
            <Banner></Banner>
            <TrendingApps trendingData={trendingData}></TrendingApps>
        </div>
    );
};

export default HomeBody;