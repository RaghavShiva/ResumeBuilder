import { useState } from 'react';
import './App.css';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Extracur from './components/Extracur';
import Projects from './components/Projects';
import Resume from './components/Resume'
import Skills from './components/Skills';

import { FaRegMoon, FaMoon, FaPrint} from 'react-icons/fa'
import ResumeEditor from './components/ResumeEditor';
function App() {
  const data = {
    name: "Shiva",
    skills: ['React js', 'Node js', 'MongoDB', 'CP', 'C++'],
    education: ['IIIT Bhopal', 'ABCD School'],
    exp: ['Student Technology Intern for ABCD School', 'Web Development Intern at XYZ Technologies'],
    proj: ['Job-portal', 'LiveLingo', 'Textify', 'Portfolio'],
    achiev: ['4-star coder on CodeChef', 'Knight at LeetCode', 'Specialist at Codeforces ', 'Topped Mathura district'],
    extc: ['Won Singing Competition', 'President of Coding Club']
  }
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggletheme = () => {
    setIsDarkMode(!isDarkMode);
    const theme = isDarkMode ? "light-theme" : "dark-theme";
    document.body.className = theme;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className='body'>
        <div className='theme'>
          <button onClick={toggletheme}>
            {!isDarkMode ? <FaMoon /> : <FaRegMoon />}
          </button>
          <span className='tooltip-text'>Toggle Theme</span>
        </div>
        <div className='print'>
          <button onClick={handlePrint}>
            <FaPrint />
          </button>
          <span className='tooltip-text'>Print</span>
        </div>
        <ResumeEditor data={data} />
        <div className='container'>
          <div>
            <Resume data={data} />
            <Education data={data} />
            <Experience data={data} />
            <Projects data={data} />
            <Skills data={data} />
            <Achievements data={data} />
            <Extracur data={data} />
            <ResumeEditor data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
