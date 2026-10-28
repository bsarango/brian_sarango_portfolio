import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Profile from './components/Profile';
import ProjectsContainer from './components/ProjectsContainer';
import ContactContainer from './components/ContactContainer';
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Profile/>
        <About/>
        <ProjectsContainer/>
        <ContactContainer/>
        <Footer/>
      </div>
    </>
  )
}

export default App
