import React from "react";
import TopSide from "./TopSide";
import BottomSide from "./BottomSide"

const Container = () => {

    const containerStyle = {
        width: '80%',
        padding: '0 15px',
        zIndex: '0',
        '@media (max-width: 768px)': {
            width: '750px'
        },
        '@media (max-width: 992px)': {
            width: '970px'
        },
        '@media (max-width: 1200px)': {
            width: '1170px'
        }
    }

    const boxHeadStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0 60px'
    }

    const headerStyle = {
        color: 'white'
    }

    const totalFollowersStyle = {
        color: 'hsl(228, 34%, 66%)',
        fontSize: '15px',
        fontWeight: '500'
    }

    const toggle = {
        background: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        width: '45px',
        height: '22px',
        borderRadius: '20px'
    }

    const circle = {
        width: '18px',
        height: '18px',
        backgroundColor: 'hsl(232, 19%, 15%)',
        borderRadius: '50%',
        margin: '2px 2px',
    }

    const modeStyle = {
        color: 'white',
        fontSize: '14px',
        fontWeight: '500',
        marginRight: '10px'
    }

    return (
        <div className="container" style={containerStyle}>
            <div style={boxHeadStyle}>
                <div>
                    <h2 style={headerStyle}>Social Media Dashboard</h2>
                    <p style={totalFollowersStyle}>Total Folowers: 23,004</p>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={modeStyle}>Dark Mode</p>
                    <label className="toggle" style={toggle}>
                        <div className="round" style={circle}></div>
                    </label>
                </div>
            </div>
            <TopSide />

            <h2 style={{color: 'white', margin: '45px 0 25px'}}>Overview - Today</h2>
            <BottomSide />
        </div>
    );
}

export default Container;