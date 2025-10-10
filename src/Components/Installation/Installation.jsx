import React, { useEffect, useState } from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import appImage from '../../assets/Apple-App-Store-Awards-2022-Trophy_inline.jpg.slideshow-large_2x.jpg'
import { getStoredApp } from '../InstalledApps/installedApp';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState([])
    const [sort, setSort] = useState("")
    const [loading, setLoading] = useState(true)

    const handleSort = (type) => {
        setSort(type)
        if (type === "high") {
            const sortedHigh = [...installedApp].sort((a, b) => b.downloads - a.downloads)
            setInstalledApp(sortedHigh)
        }
        if (type === "low") {
            const sortedLow = [...installedApp].sort((a, b) => a.downloads - b.downloads)
            setInstalledApp(sortedLow)
        }
    }

    useEffect(() => {
        const storedAppData = getStoredApp()
        const convertedData = storedAppData.map(id => parseInt(id))
        fetch('/allAppData.json')
            .then(res => res.json())
            .then(data => {
                const installedApp = data.filter(app => convertedData.includes(app.id))
                setTimeout(() => {
                    setInstalledApp(installedApp)
                    setLoading(false)
                }, 500)
            })
            .catch(() => setLoading(false))
    }, [])

    const formatDownloads = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
        if (num >= 1000) return Math.floor(num / 1000) + 'K+';
        return num.toString();
    };

    const handleUninstall = (id) => {
        const storedAppData = getStoredApp()
        const updatedStoredApps = storedAppData.filter(appId => parseInt(appId) !== id)
        localStorage.setItem("installed", JSON.stringify(updatedStoredApps))
        setInstalledApp(prev => prev.filter(app => app.id !== id))
    }

    if (loading) return <div className="flex justify-center items-center h-[60vh]"><span className="loading loading-dots loading-lg"></span></div>;

    return (
        <div className='p-20 bg-[#D2D2D250]'>
            <div className="text-center">
                <p className='text-5xl font-bold'>Your Installed Apps</p>
                <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="my-10">
                <div className="flex justify-between items-center">
                    <p className='text-2xl font-semibold'>{installedApp.length} App Found</p>
                    <details className="dropdown">
                        <summary className="btn m-1 px-10">Sort By : {sort ? sort : ""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("high")}>High-Low</a></li>
                            <li><a onClick={() => handleSort("low")}>Low-High</a></li>
                        </ul>
                    </details>
                </div>

                {installedApp.map((app) => (
                    <div key={app.id} className="my-8 bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                        <div className="flex gap-4 items-center">
                            <img className='h-20 w-20 object-cover rounded-2xl' src={appImage} alt="" />
                            <div>
                                <p className='text-xl font-medium'>{app.title}</p>
                                <div className="flex items-center mt-4">
                                    <img className='h-4 w-4' src={download} alt="" />
                                    <p className='text-[#00d390] ml-1'> {formatDownloads(app.downloads)}</p>
                                    <img className='h-4 w-4 ml-4' src={rating} alt="" />
                                    <p className='text-orange-500 ml-1'>{app.rating}</p>
                                    <p className='text-[#00d390] ml-4'>{app.size} MB</p>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-secondary' onClick={() => {
                            handleUninstall(app.id)
                            toast("App Successfully Uninstalled")
                        }}>Uninstall</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;
