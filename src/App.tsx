import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import portfolioData from './data/portfolio.json';
import type { PortfolioData } from './types/portfolio';
import './App.css';
import SkillsComponent from './components/Skills/Skills';

const data = portfolioData as PortfolioData;

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header name={data.personal.name}/>
        <main> 
          <About personal={data.personal} />
          <SkillsComponent skills={data.skills}/>
          <Experience experience={data.experience} />
          <Projects projects={data.projects} />
          <Contact personal={data.personal} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
