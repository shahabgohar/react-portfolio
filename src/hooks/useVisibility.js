import React from 'react'
import {store} from "../store/NavStore";

export class UseVisibility extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            //user did not see
            check:false
        }
    }

    updateVisibility(){
        this.setState({check: !this.state.check})
    }
    visibilityChange(isVisible){

        if(isVisible === true && !this.state.check === true){
            this.updateVisibility()
            store.dispatch({
                type:'UPDATE_NAV_COLOR',
                payload: 'bg-red-700'
            })
        }

    }


}