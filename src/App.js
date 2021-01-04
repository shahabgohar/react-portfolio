import React from 'react'
import NavBar from "./components/navcomponent/NavBar";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import ClientReviews from "./components/ClientReviews/ClientReviews";
import TechStack from "./components/TechStack/TechStack"
import Accomplishments from "./components/Accomplishments/accomplishments";
import ProjectComponent from "./components/Projects/ProjectComponent";
import FooterComponent from "./components/FooterComponents/FooterComponent";
class App extends React.Component{
  render() {
    return <React.Fragment>
      <NavBar />
      <MainDisplay />
      <TechStack />
      <Accomplishments />
      <ProjectComponent />
      <ClientReviews/>
      <FooterComponent />
      </React.Fragment>
  }

}

export default App;
