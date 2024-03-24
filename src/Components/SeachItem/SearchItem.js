import { useEffect, useState } from 'react'
import './SearchItem.css'
import axios from "axios";


export default function SearchItem() {

    const hotelsdata = [
        {
            id: '1',
            title: "Tower Street Apartment",
            distance: '500m from center',
            taxiOp: 'Free airport taxi',
            subtitle: 'Studio Apartment with Air Conditioning',
            features: 'Entire studio . 1 bathroom .21m full bed',
            cancelOp: 'Free cancellation',
            cancelOpSubTitle: 'You can cancel later ,so lock in this great price today!',
            image: require("../../assets/austin.jpg")

        },
        {
            id: '2',
            title: "Tower Street Apartment",
            distance: '500m from center',
            taxiOp: 'Free airport taxi',
            subtitle: 'Studio Apartment with Air Conditioning',
            features: 'Entire studio . 1 bathroom .21m full bed',
            cancelOp: 'Free cancellation',
            cancelOpSubTitle: 'You can cancel later ,so lock in this great price today!',
            image: require("../../assets/austin.jpg")
        },
        {
            id: '3',
            title: "Tower Street Apartment",
            distance: '500m from center',
            taxiOp: 'Free airport taxi',
            subtitle: 'Studio Apartment with Air Conditioning',
            features: 'Entire studio . 1 bathroom .21m full bed',
            cancelOp: 'Free cancellation',
            cancelOpSubTitle: 'You can cancel later ,so lock in this great price today!',
            image: require("../../assets/reno.jpg")

        }
    ]

    return (


        <div>
            {hotelsdata.map((item, id) => (
                <div className='searchItem' key={id}>
                    <img src={item.image} alt={item.title} className='searchItemImg' />
                    <div className='searchItemDescription'>
                        <h1 className='searchItemTitle'>{item.title}</h1>
                        <span className='searchItemDistance'>{item.distance}</span>
                        <span className='searchItemTaxiOp'>{item.taxiOp}</span>
                        <span className='searchItemSubtitle'>{item.subtitle}</span>
                        <span className='searchItemFeatures'>{item.features}</span>
                        <span className='searchItemCancelOp'>{item.cancelOp}</span>
                        <span className='searchItemCancelOpSubtitle'>{item.cancelOpSubTitle}</span>
                    </div>
                    <div className='searchItemDetails'>
                        <div className='searchItemRating'>
                            <span>Excellent</span>
                            <button>8.9</button>
                        </div>
                        <div className='searchDetailTexts'>
                            <span className='siPrice'>$123</span>
                            <span className='siTax0p'>Includes taxes and fees</span>
                            <button className='siCheckButton'>see Available</button>
                        </div>
                     </div>
                </div>
            )
            )}

        </div>
    )
}
