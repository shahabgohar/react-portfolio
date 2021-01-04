import React from 'react'
import './ClientReviews.css'
import AliceCarousel from 'react-alice-carousel';
import VisibilitySensor from 'react-visibility-sensor'
import 'react-alice-carousel/lib/alice-carousel.css';
import {store} from '../../store/NavStore'
class ClientReviews extends React.Component {
    constructor(props){
        super(props)
        this.visibilityChange = this.visibilityChange.bind(this)
    }
    render(){
        return <VisibilitySensor onChange={this.visibilityChange}>
        <div id='reviews' className='TechStack w-full flex relative flex-col justify-start items-center  z-20'>
                <p className='m-10 z-20 text-3xl'>My Client Reviews </p>
            <div className='w-full h-full z-20 flex relative flex-col justify-start items-center'>
            <AliceCarousel autoPlay={true} infinite={true} disableButtonsControls={true} autoPlayInterval="3000">
                <img src='assets/reviews/review1.png' alt={'not found'} className='sliderimg z-20'/>
                <img src='assets/reviews/review2.png' alt={'not found'} className='sliderimg z-20'/>
                <img src='assets/reviews/review3.png' alt={'not found'} className='sliderimg z-20' />
                <img src='assets/reviews/review4.png' alt={'not found'} className='sliderimg z-20'/>
                <img src='assets/reviews/revew5.png' alt={'not found'} className='sliderimg z-20'/>
            </AliceCarousel>
                </div>
            <div className='pic-container-end right-0 top-0 absolute w-full h-full flex flex-col justify-center overflow-hidden'>
                <img src='assets/clientreviews/rev.svg' alt={'not found'} className='sliderimg-back '/>
                </div>
            </div>
            </VisibilitySensor>

    }

    visibilityChange(isVisible){
    if(isVisible){
        store.dispatch({
            type:'UPDATE_NAV_COLOR',
            payload: 'bg-blue-700'
        })
    }

    }
}


export default ClientReviews