import React from 'react'
import './accomplishments.css'
import VisibilitySensor from 'react-visibility-sensor'
import {UseVisibility} from '../../hooks/useVisibility'
class Card extends UseVisibility{
    constructor(props){
        super(props)
        this.visibilityChange = this.visibilityChange.bind(this)
        this.card = React.createRef()
    }
    render(){
        return (
            <VisibilitySensor onChange={this.visibilityChange}>
            <div ref={this.card} className='Card Card-size h-3/4 inline bg-yellow-400 flex flex-col justify-around items-center m-1'>
                    <img className='w-full' alt='failed to load' src={"assets/images/"+this.props.image}/>
                    <p>{this.props.title}</p>
                </div>
        </VisibilitySensor>
        );
    }
    visibilityChange(isVisible){
        if(isVisible=== true && !this.state.change === true){
            this.updateVisibility()
            this.card.current.style.visibility='visible';
           this.card.current.classList.add('animation-card')
        }
    }


}
export default Card