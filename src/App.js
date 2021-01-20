import './App.css';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Education></Education>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
