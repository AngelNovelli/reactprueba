import React from 'react';
import DiscoverHeader from './components/discover/DiscoverHeader';
import RecommendationCard from './components/discover/RecommendationCard';
import '../styles/DiscoverPage.css'
import Header from './components/header/Header';
import Sidebar from './components/hooks/Sidebar';

function DiscoverPage() {
    const recommendations = [
        {
            channelName: "Channel name",
            subs: "0",
            videos: "0",
            description: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
            profileImg: "/media/home_media/profile/gena.jpg",
            bannerImg: "/media/studio_media/banner-pc.jpg",
            lastVideo: {
                title: "Title of video",
                timeAgo: "0 years ago",
                views: "0 view",
                thumbnail: "/media/yourChannel_media/thumbnails/duki.jpeg",
                description: "Description Description Description Description Description Description Description"
            },
            lastShort: {
                thumbnail: "/media/home_media/thumbnails/shorts.jpg"
            }
        },
    ];


    return (
        <body>


            <Header></Header>
            <Sidebar></Sidebar>
            <main className="main-content">

                <DiscoverHeader />

                {recommendations.map((rec, index) => (
                    <RecommendationCard key={index} data={rec} />
                ))}
            </main>
        </body>
    );
}

export default DiscoverPage;