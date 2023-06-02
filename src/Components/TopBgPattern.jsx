import React from "react";

const TopBgPattern = () => {

    const pattern = {
        backgroundColor: 'hsl(232, 19%, 15%)',
        height: '250px',
        width: '100%',
        borderRadius: '0 0 25px 25px',
        boxShadow: '1px 0px 3px #0002',
        position: 'absolute',
        top: '0',
    }

    return (
        <div className="top-bg-pattern" style={pattern}>
            
        </div>
    );
}

export default TopBgPattern;