import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Profile from './components/Profile';
import ProjectsContainer from './components/ProjectsContainer';

function App() {

  return (
    <>
      <Navbar/>
      <div>
        Brian Sarango Main Page
        <Profile/>
        <About/>
        <ProjectsContainer/>
      </div>
    </>
  )
}

export default App
