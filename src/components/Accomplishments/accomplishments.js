import React from 'react'
import './accomplishments.css'
import Card from './card'
import VisibilitySensor from 'react-visibility-sensor'
import {store} from "../../store/NavStore";
class Accomplishments extends React.Component{
    constructor(props){
        super(props);
        this.visibilityChange = this.visibilityChange.bind(this);
    }
    render(){
        return <VisibilitySensor onChange={this.visibilityChange}>
        <div id='accomplishments' className='accomplishments relative w-full flex flex-col sm:items-center md:items-start lg:items-start justify-center ' >
            <p className='m-5 text-3xl z-20'>My Accomplishments</p>
            <div className=' h-3/4 flex lg:items-center m-2 justify-start z-20 md:items-start sm:items-center md:w-3/4 lg:w-3/4 sm:w-full'>
                  <Card title='Graphic Designer Head' image='hackathon.png'/>
                <Card title='Hackathon Winner' image='hackathon.png'/>

                </div>
            <div className='absolute w-full h-full flex flex-col justify-center pic-container-end'>
                <img className='image-tech-stack' src='/assets/accomplishments/accomplishments.svg'/>
                </div>

            </div>
        </VisibilitySensor>
    }

    visibilityChange(isVisible){
        if(isVisible){

            store.dispatch({
                type:'UPDATE_NAV_COLOR',
                payload: 'bg-red-700'
            })
        }

    }


}

export default Accomplishments