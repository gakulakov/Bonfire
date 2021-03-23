import React from "react";
import './MainBlock.scss'
import {ImageCard} from "../../templates/ImageCard/ImageCard";
import {Button} from "../../templates/Button/Button";


export const MainBlock = () => {
    return (
        <div className={'main-block'}>
            <div>
                <div className={'main-block__text'}>
                    <p>
                        Take your merch to the next level
                    </p>
                </div>
                <div className={'main-block__cards'}>
                    <ImageCard urlImg={'../../assets/images/cards/1.png'} alt={'1'}/>
                    <ImageCard urlImg={'../../assets/images/cards/2.png'} alt={'2'}/>
                    <ImageCard urlImg={'../../assets/images/cards/3.png'} alt={'3'}/>
                    <ImageCard urlImg={'../../assets/images/cards/4.png'} alt={'4'}/>
                    <ImageCard urlImg={'../../assets/images/cards/5.png'} alt={'5'}/>
                </div>
                <div className={'main-block__merch'}>
                    <p>Introducing Bonfire X—the exclusive merch concierge service for the world’s top creators.</p>
                    <Button value={'Unlock access'.toUpperCase()} style={{letterSpacing: 2.1}}/>
                </div>
                <div className={'ticked'}>
                    <div className={'ticked__left'}>
                        <div className={'ticked__flawer'}>
                            <img src="../../assets/images/flawer.png" alt="flawer"/>
                        </div>
                        <div className={'ticked__joined'}>
                            <p className={'join'}>Join the X club</p>
                        </div>
                        <ul className={'ticked__list'}>
                            <li className={'ticked__item'}>
                                <p>Fully tailored</p>
                                <p>Custom store</p>
                            </li>
                            <li className={'ticked__item'}>
                                <p>Fully tailored</p>
                                <p>Custom store</p>
                            </li>
                            <li className={'ticked__item'}>
                                <p>Fully tailored</p>
                                <p>Custom store</p>
                            </li>
                        </ul>
                    </div>

                    <div className={'ticked__right'}>
                        <p>ADMIT ONE</p>
                        <p>ADMIT ONE</p>
                    </div>
                </div>
                {/*<div className={'main-block__img-ticked'}>*/}
                {/*    <img src="../../assets/images/ticked.png" alt="ticked"/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}