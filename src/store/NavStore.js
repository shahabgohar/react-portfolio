import {createStore} from 'redux'
const NavReducer = (state,action)=>{
    switch (action.type){
        case 'UPDATE_NAV_COLOR':
            state = action.payload
            break;
    }
    return state
}
export  const store = createStore(NavReducer,'bg-yellow-500')