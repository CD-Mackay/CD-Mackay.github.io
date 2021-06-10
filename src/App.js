import Header from './Components/Header';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Separator from './Components/Separator';
import './App.css';


// Font awesome Icons

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faEnvelopeOpen,faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubAlt, faLinkedinIn, faEnvelope, faEnvelopeOpen, faPhone);

function App() {
  return (
    <div className="App">
      <div className="opener">
      <Header />
      <Introduction />
      </div>
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
 
      <Footer />

    </div>
  );
}

export default App;
