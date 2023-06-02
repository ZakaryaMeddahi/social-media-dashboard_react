import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faTwitter, faInstagram } from '@fontawesome/free-brands-svg-icons';
import { ReactComponent as Facebook } from "./images/icon-facebook.svg"
import { ReactComponent as Twitter } from "./images/icon-twitter.svg"
import { ReactComponent as Instagram } from "./images/icon-instagram.svg"
import { ReactComponent as Youtube } from "./images/icon-youtube.svg"
import { ReactComponent as Up } from "./images/icon-up.svg"
import { ReactComponent as Down } from "./images/icon-down.svg"

const FollowerCard = (props) => {

    let cardTheme = {
        backgroundColor: 'hsl(228, 28%, 20%)',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        borderTop: `5px solid ${props.color}`,
        cursor: 'pointer',
    }

    const usernameStyle = {
        display: 'flex',
        justifyContent: 'center',
        color: 'hsl(228, 34%, 66%)',
        marginBottom: '20px'
    }

    const followersStyle = {
        fontSize: '40px',
        color: 'white',
        marginBottom: '5px'
    }

    const thirdHeadingStyle = {
        color: 'hsl(228, 34%, 66%)',
        fontWeight: '300',
        marginBottom: '20px',
        textTransform: 'uppercase'
    }

    const progressStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'hsl(163, 72%, 41%)',
        fontSize: '14px',
        fontWeight: '500'
    }

    const followers = props.followers.split(' ');

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
        <div className="followers-card" style={cardTheme}>
            <div className="username" style={usernameStyle}>
                {printLogo()}
                <p style={{marginLeft: '10px'}}>@{props.username}</p>
            </div>
            <h1 style={followersStyle}>{followers[0]}</h1>
            <h3 style={thirdHeadingStyle}>{followers[1]}</h3>
            <div className="progress" style={progressStyle}>
                {upOrDown()}
                <p style={{marginLeft: '5px'}}>{props.progress} Today</p>
            </div>
        </div>
    );
}

export default FollowerCard;