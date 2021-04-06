import React, {useState} from "react";
import './Header.scss'
import {Button} from "../../templates/Button/Button";


export const Header = () => {

    const arr = ['header__list']

    const [active, setActive] = useState(false)

    const handler = () => setActive(prevState => !prevState)


    active && arr.push('active')
    console.log(arr)


    return (
        <div id={'header'} className="header">
            <div className={'header__logo'}>
                <img src="../../assets/images/logo.svg" alt="logo"/>
            </div>

            <div className="header__menu">

                <div className={'header__buttons'}>
                    <Button value={'Log in'.toUpperCase()} style={{marginLeft: 50}}/>

                    <img onClick={handler} className={'header__burger'} src={'../../assets/images/list.svg'}
                         alt={'menu'}
                         width={50}/>
                </div>
                <div className={arr.join(' ')}>
                    <a href="#header" className={'header__item'}>Sell online</a>
                    <a href="#header" className={'header__item'}>Fundraise</a>
                    <a href="#header" className={'header__item'}>Customize</a>
                    <a href="#header" className={'header__item'}>Explore</a>
                </div>
            </div>
        </div>
    )
}