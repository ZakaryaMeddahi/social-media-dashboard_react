import React from "react";
import TopBgPattern from "./TopBgPattern";
import Container from "./Container";

const Body = () => {
    
    const bodyStyle = {
        width: '100%',
        minHeight: '100vh',
        paddingBottom: '100px',
        backgroundColor: 'hsl(230, 17%, 14%)',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    }
    
    return (
        <div className="body" style={bodyStyle}>
            <TopBgPattern />
            <Container />
        </div>
    );
}

export default Body;