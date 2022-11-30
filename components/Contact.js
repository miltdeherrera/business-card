// name, title, URL, buttons

import React from 'react'

export default function Contact() {
    const emailLink = () => {
        window.open('mailto:miltdeherrera@gmail.com?subject=Reaching%20out')

    }

    const linkedinLink = () => {
        window.location.href='https://www.linkedin.com/in/miltdeherrera/'
    }

    return (
           <div className="info--text">
            <h1 className="info--name">Milt Deherrera</h1>
            <h2 className="info--title">Full Stack Developer</h2>
            <div className="info--url">
                <a href="http://www.miltdeherrera.com">miltdeherrera.com</a>
            </div>
            <div className="buttonrow">
                <button className="button--email" onClick={emailLink}><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="button--linkedin" onClick={linkedinLink}><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}