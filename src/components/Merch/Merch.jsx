import React from "react";
import './Merch.scss'
import {Button} from "../../templates/Button/Button";


export const Merch = () => {
    return (
        <div className={'merch'}>
            <div className={'merch__left'}>
                <p>Join Bonfire X to take your custom merch to the next level.</p>
                <Button value={'Unlock access'.toUpperCase()} style={{letterSpacing: 2.1}} />
            </div>
            <div className={'merch__right'}>
                <img src="../../assets/images/merch/3.png" alt="3"/>
            </div>
        </div>
    )
}