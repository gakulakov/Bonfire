import React from 'react'
import './ImageCard.scss'
import {Button} from "../Button/Button";


export const ImageCard = ({urlImg, alt}) => {
    return (
        <div className={'image-card'} style={{backgroundImage: `url(${urlImg})`}}>
            <div className={'image-card__inner'}>
                <div className={'image-card__block'}>
                    <p>SHOP JOSH LEVI</p>
                    <Button value={'View'.toUpperCase()} style={{letterSpacing: 2}} />
                </div>
            </div>
        </div>
    )
}