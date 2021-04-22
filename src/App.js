import Header from './Components/Header';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import './App.css';


// Font awesome Icons

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubAlt, faLinkedinIn, faEnvelope, faEnvelopeOpen);

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
