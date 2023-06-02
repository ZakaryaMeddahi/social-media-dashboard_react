import React from "react";
import FollowerCard from "./FollowerCard";

const TopSide = () => {

    const topSideStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
    }

    return (
        <div className="top-side" style={topSideStyle}>
            <FollowerCard color= 'hsl(208, 92%, 53%)'
            logo= 'facebook'
            username= 'zakarya'
            followers= '2099 followers'
            progress= '99'/>

            <FollowerCard color= 'hsl(203, 89%, 53%)'
            logo= 'twitter'
            username= 'zakarya'
            followers= '1235 followers'
            progress= '99'/>

            <FollowerCard color= 'purple'
            logo= 'instagram'
            username= 'zakarya'
            followers= '11k followers'
            progress= '99'/>

            <FollowerCard color= 'hsl(348, 97%, 39%)'
            logo= 'youtube'
            username= 'zakarya'
            followers= '500 followers'
            progress= '30'/>
            
        </div>
    );
}

export default TopSide;