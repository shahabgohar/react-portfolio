import React from'react'
import './NavBar.css'
import {store} from '../../store/NavStore'
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.navBar = React.createRef();
        this.menuDrop = React.createRef();
        this.changeNavBarColor = this.changeNavBarColor.bind(this);
        this.displayMenu = this.displayMenu.bind(this)
        this.state = {
            color: 'bg-yellow-500'
        }
        store.subscribe(()=>{
          this.changeNavBarColor(store.getState())
            this.setState({color:store.getState()})
        })
    }
    render() {
        return <nav id='navBarId' className='NavBar w-full h-20 bg-yellow-500 flex flex-row justify-end sticky top-0 z-50'>
                <ul className='NavBar-menu lg:w-2/4 md:w-3/4 sm:w-full m-5 text-center flex flex-row justify-around items-center'>
                    <a >Home</a>
                    <a href='#projects' >Projects</a>
                    <a href='#techstack' >Tech Stack</a>
                    <a href='#reviews' >Reviews</a>
                    <a href='#accomplishments'>Accomplishments</a>
                    </ul>
            <div style={{width:'60px'}} className='menu-icon h-full relative cursor-pointer flex flex-row items-center justify-center ' onClick={this.displayMenu}>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                   <img  src='assets/images/menuIcon.svg' alt='not found'/>
                    </div>
                <ul ref={this.menuDrop} style={{display:'none'}} className='absolute menu-dropdown flex flex-col items-center justify-center'>
                    <a >Home</a>
                    <a href='#projects' >Projects</a>
                    <a href='#techstack' >Tech Stack</a>
                    <a href='#reviews' >Reviews</a>
                    <a href='#accomplishments'>Accomplishments</a>
                    </ul>
            </div>
            </nav>
    }

    changeNavBarColor(col){
        if(document.getElementById('navBarId').classList.contains(this.state.color))
        {
            document.getElementById('navBarId').classList.remove(this.state.color)
            document.getElementById('navBarId').classList.add(col)
        }

    }

    displayMenu(e){
        if(this.menuDrop.current.style.display === 'none')
        this.menuDrop.current.style.display='flex'
        else
            this.menuDrop.current.style.display='none'

    }



}

export default NavBar;