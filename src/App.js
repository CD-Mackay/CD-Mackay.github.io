import Header from './Components/Header';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
