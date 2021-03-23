import React from "react";
import './Footer.scss'


export const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'logo'}>
                <div className={'logo__top'}>
                    <img src="../../assets/images/logo.svg" alt="logo"/>
                    <p>Where the world goes for premium custom shirts</p>
                </div>
                <div className={'logo__bottom'}>
                    <a href={'https://www.bonfire.com/'}>© 2021 Bonfire.com</a>
                    <p>DMCA&nbsp;&nbsp; Trademark Takedown</p>
                </div>
            </div>

            <div className={'footer__using'}>
                <p>Using bonfire</p>
                <ul>
                    <li>Sell shirts online</li>
                    <li>Start a fundraiser</li>
                    <li>Order custom shirts</li>
                    <li>YouTube creators</li>
                    <li>Online stores</li>
                    <li>Log In</li>
                    <li>Track my order</li>
                </ul>
                <a href="#header">Start a campaign</a>

            </div>
            <div className={'footer__using'}>
                <p>Resources</p>
                <ul>
                    <li>Help center</li>
                    <li>Design templates</li>
                    <li>Request a custom design</li>
                    <li>Product catalog</li>
                    <li>Pricing calculator</li>
                    <li>Blog</li>
                    <li>Stories</li>
                </ul>
            </div>
            <div className={'footer__using'}>
                <p>Company</p>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className={'footer__socials'}>
                <p>Follow us</p>
                <ul>
                    <li><img src="../../assets/images/socials/1.svg" alt="1"/></li>
                    <li><img src="../../assets/images/socials/2.svg" alt="2"/></li>
                    <li><img src="../../assets/images/socials/3.svg" alt="3"/></li>
                    <li><img src="../../assets/images/socials/4.svg" alt="4"/></li>
                </ul>
            </div>

        </div>
    )
}