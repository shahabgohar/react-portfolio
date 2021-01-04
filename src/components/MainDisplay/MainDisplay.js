import React from 'react'
import './MainDisplay.css'
import IntroComponent from "../IntroComponent/IntroComponent";
import VisibilitySensor from 'react-visibility-sensor';
import ImageSlider from "../ImageSlider/ImageSlider";
import {store} from "../../store/NavStore";
class MainDisplay extends React.Component{
    constructor(props){
        super(props)
        this.visibilityChange = this.visibilityChange.bind(this)
    }
    render() {
        return <VisibilitySensor onChange={this.visibilityChange}>
        <div className='MainDisplay w-full  flex items-center'>
                <IntroComponent />
                <ImageSlider />
            </div>
        </VisibilitySensor>
    }

    visibilityChange(isVisible){
        if(isVisible){
            store.dispatch({
                type:'UPDATE_NAV_COLOR',
                payload: 'bg-yellow-500'
            })
        }

    }

}




export default MainDisplay;