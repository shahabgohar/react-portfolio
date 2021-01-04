import React from 'react'
import './TechStack.css'
import VisibilitySensor from 'react-visibility-sensor'
import {store} from "../../store/NavStore";
class TechStack extends React.Component {
    constructor(props) {
        super(props)
        this.visibilityChange = this.visibilityChange.bind(this)
    }

    render() {
        return <VisibilitySensor onChange={this.visibilityChange}>
        <div id='techstack' className='TechStack w-full  flex flex-col items-center justify-center relative'>

                <p className='text-3xl z-20'>My Tech Stack</p>
                <div className='TechStack-Items w-4/5 flex flex-wrap items-center justify-center h-3/4 mt-5 z-20'>
                    <img src='assets/images/vue.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/nuxt.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/php.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/react.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/javascript.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/html.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/css.svg' alt=' not found' className='TechStack-Image'/>
                    <img src='assets/images/adobe-illustrator-cc.svg' alt=' not found' className='TechStack-Image'/>
                    </div>
            <div  className='pic-container-start w-full h-full absolute top-0  flex flex-col  justify-center'>
                <img className='image-tech-stack' src='/assets/techstack/techstack.svg' />
            </div>
            </div>
        </VisibilitySensor>
    }
    visibilityChange(isVisible){
        if(isVisible){
            store.dispatch({
                type:'UPDATE_NAV_COLOR',
                payload: 'bg-green-700'
            })
        }

    }

}
export default TechStack
