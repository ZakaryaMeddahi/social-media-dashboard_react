import React from "react";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg"
import { ReactComponent as Twitter } from "./images/icon-twitter.svg"
import { ReactComponent as Instagram } from "./images/icon-instagram.svg"
import { ReactComponent as Youtube } from "./images/icon-youtube.svg"
import { ReactComponent as Up } from "./images/icon-up.svg"
import { ReactComponent as Down } from "./images/icon-down.svg"

const OverviewCard = (props) => {

    let cardTheme = {
        backgroundColor: 'hsl(228, 28%, 20%)',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        cursor: 'pointer',
    }

    const headerOfCard = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    }

    const footerOfCard = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const followersStyle = {
        color: 'white',
        margin: '0'
    }

    const titleStyle = {
        color: 'hsl(228, 34%, 66%)',
        fontSize: '13px',
        fontWeight: '500',
        textTransform: 'capitalize'
    }

    const progressStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'hsl(163, 72%, 41%)',
        fontSize: '14px',
        fontWeight: '500'
    }

    function printLogo() {
        if(props.logo === 'facebook') {
            return <Facebook />;
        }
        else if(props.logo === 'twitter') {
            return <Twitter />;
        }
        else if(props.logo === 'instagram') {
            return <Instagram />;
        }
        else if(props.logo === 'youtube') {
            return <Youtube />;
        }
    }

    function upOrDown() {
        if(parseFloat(props.progress) > 50) {
            progressStyle.color = 'hsl(163, 72%, 41%)'
            return <Up />;
        }
        else if(parseFloat(props.progress) < 50) {
            progressStyle.color = 'hsl(356, 69%, 56%)'
            return <Down />;
        }
        else {
            return ' ';
        }
    }

    return (
        <div className="overview-card" style={cardTheme}>
            <div style={headerOfCard}>
                <p style={titleStyle}>{props.title}</p>
                {printLogo()}
            </div>
            <div style={footerOfCard}>
                <h3 style={followersStyle}>{props.followers}</h3>
                <div className="progress" style={progressStyle}>
                    {upOrDown()}
                    <p style={{marginLeft: '5px'}}>{props.progress}%</p>
                </div>
            </div>
        </div>
    );
}

export default OverviewCard;