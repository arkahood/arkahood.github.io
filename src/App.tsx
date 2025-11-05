import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import portfolioData from './data/portfolio.json';
import type { PortfolioData } from './types/portfolio';
import './App.css';

const data = portfolioData as PortfolioData;

function App() {
  return (
    <div className="App">
      <Header name={data.personal.name} title={data.personal.title} />
      <About personal={data.personal} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact personal={data.personal} />
    </div>
  );
}

export default App;
