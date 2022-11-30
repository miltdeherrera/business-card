// social bar on bottom

import React from 'react'

export default function Social() {
    return (
        <div className="social">
            <a href="https://twitter.com/miltdeherrera/">
                <img className="social--icon" src="../images/twitter-icon.png" />
            </a>
            <img className="social--icon" src="../images/facebook-icon.png" />
            <a href='https://www.instagram.com/miltdeherrera/'>
                <img className="social--icon" src="../images/instagram-icon.png" />
            </a>
            <a href="https://github.com/miltdeherrera">
                <img className="social--icon" src="../images/github-icon.png" />
            </a>
        </div>
    )
}