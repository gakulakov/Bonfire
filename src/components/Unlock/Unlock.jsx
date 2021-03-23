import React from 'react'
import './Unlock.scss'


export const Unlock = () => {
    return (
        <div className={'unlock'}>
            <img src="../../assets/images/unlock/1.svg" alt="1"/>
            <div className={'unlock__text'}>
                <p className={'unlock__title'}>More than just t-shirts</p>
                <p className={'unlock__subtitle'}>Unlock</p>
                <p className={'unlock__subtitle'}>Exclusive</p>
                <p className={'unlock__subtitle'}>Products</p>
                <p className={'unlock__value'}>With Bonfire X, you’ll unlock access to premium products from top merchandising brands. Your custom
                    merch can be tailored to your exact needs.</p>
            </div>
            <img src="../../assets/images/unlock/2.svg" alt="1"/>
        </div>
    )
}