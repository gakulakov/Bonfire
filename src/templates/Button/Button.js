import React from "react";
import './Button.scss'


export const Button = (props) => {

    return(
        <>
            <button className={'stnd-btn'} {...props}>{props.value}</button>
        </>
    )
}