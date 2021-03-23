import React from "react";
import './Header.scss'
import {Button} from "../../templates/Button/Button";


export const Header = () => {
    return (
            <div id={'header'} className="header">
                <div className={'header__logo'}>
                    <img src="../../assets/images/logo.svg" alt="logo"/>
                </div>

                <div className="header__menu">
                    <a href="#header" className={'header__item'}>Sell online</a>
                    <a href="#header" className={'header__item'}>Fundraise</a>
                    <a href="#header" className={'header__item'}>Customize</a>
                    <a href="#header" className={'header__item'}>Explore</a>

                    <Button value={'Log in'.toUpperCase()} style={{marginLeft: 50}} />
                </div>
            </div>
    )
}