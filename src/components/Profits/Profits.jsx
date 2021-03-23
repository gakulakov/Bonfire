import React from 'react'
import './Profits.scss'


export const Profits = () => {
    return (
        <div className={'profits-container'}>
            <div className={'profits'}>
                <img src="../../assets/images/profit.png" alt="profit"/>
                <div className={'profits__text'}>
                    <p className={'profits__title'}>Lock in the extra profits</p>
                    <p className={'profits__subtitle'}>Custom</p>
                    <p className={'profits__subtitle'}>Revenue Splits</p>
                    <p className={'profits__value'}>Bonfire X members get exclusive access to our straightforward boosted revenue sharing program
                        that is individually customized for each creator.</p>
                </div>
            </div>
        </div>
    )
}