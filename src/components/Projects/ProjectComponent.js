import React from 'react'
import './ProjectComponent.css'
import Card from '../Accomplishments/card'
export default class ProjectComponent extends React.Component {

    render() {
        return <div id='projects' className='relative ProjectComponent w-full flex flex-col sm:items-center lg:items-end justify-center'>

            <div className='flex flex-row w-2/4 items-center justify-start text-3xl'>
                <p className='m-2 z-20'>Projects</p>
            </div>
            <ul className='ProjectComponent-categories m-2 z-20 lg:w-2/4 md:w-3/4 sm:w-full bg-blue-50 flex flex-row  justify-around mt-5 sm:items-center md:items-center lg:items-center '>
                    <li>Grphics</li>
                <li>Front End</li>
                <li>Back End</li>
                </ul>
            <div  className='ProjectComponent-listing m-2 z-20 lg:w-2/4 md:w-3/4 sm:w-full h-4/5 flex flex-col flex-wrap justify-center items-center'>
                <Card title='Hackathon Winner' image='hackathon.png'/>
                <Card title='Hackathon Winner' image='hackathon.png'/>
                <Card title='Hackathon Winner' image='hackathon.png'/>
                <Card title='Hackathon Winner' image='hackathon.png'/>
                <Card title='Hackathon Winner' image='hackathon.png'/>
                </div>


            <div  className='pic-container-start absolute w-full h-full flex flex-col justify-center'>
                <img className='image-tech-stack' style={{backgroundColor:'white'}} src='/assets/projecs/project-completed.svg'/>
                </div>
            </div>
    }

  }
