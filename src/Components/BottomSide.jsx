import React from "react";
import OverviewCard from "./OverviewCard";

const TopSide = () => {

    const bottomSideStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
    }

    return (
        <div className="top-side" style={bottomSideStyle}>
            <OverviewCard logo= 'facebook'
            title= 'Pages Views'
            followers= '500'
            progress= '20'/>
            <OverviewCard logo= 'facebook'
            title= 'Likes'
            followers= '500'
            progress= '20'/>
            <OverviewCard logo= 'instagram'
            title= 'Likes'
            followers= '500'
            progress= '20'/>
            <OverviewCard logo= 'instagram'
            title= 'Profile Views'
            followers= '500'
            progress= '20'/>

            <OverviewCard logo= 'twitter'
            title= 'Retwites'
            followers= '500'
            progress= '20'/>
            <OverviewCard logo= 'twitter'
            title= 'Likes'
            followers= '500'
            progress= '20'/>
            <OverviewCard logo= 'youtube'
            title= 'Likes'
            followers= '500'
            progress= '20'/>
            <OverviewCard logo= 'youtube'
            title= 'Total Views'
            followers= '500'
            progress= '20'/>
            
        </div>
    );
}

export default TopSide;