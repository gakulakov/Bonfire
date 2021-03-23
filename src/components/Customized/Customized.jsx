import React from 'react'
import './Customized.scss'


export const Customized = () => {
    return (
        <div className={'customized'}>
            <div className={'customized__text'}>
                <p>Designed just for you</p>
                <p>Customized Selling Experience</p>
            </div>

            <div className={'customized__images'}>
                <img src="../../assets/images/customized/1.png" alt="1"/>
                <div className={'customized__second'}>
                    <p>Our in-house design team will work with you to create a custom store that seamlessly represents
                        your brand.</p>
                    <img src="../../assets/images/customized/2.png" alt="2"/>
                </div>
            </div>

            <ul className={'customized__list'}>
                <li className={'customized__item'}>
                    <p>Free marketing samples</p>
                    <p>We’ll send you free samples of your merch to use in your marketing materials.</p>
                </li>
                <li className={'customized__item'}>
                    <p>Dedicated account management</p>
                    <p>1-on-1 support to help you plan and execute your product launches.</p>
                </li>
                <li className={'customized__item'}>
                    <p>Evergreen campaigns</p>
                    <p>Decide which campaigns are always active so you never miss a sale.</p>
                </li>
            </ul>
        </div>
    )
}