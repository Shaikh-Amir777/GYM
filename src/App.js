import './App.css';
import About from './componennt/About';
import Contact from './componennt/Contact';
import Feature from './componennt/Feature';
import Header from './componennt/Header';
import { Navbaar } from './componennt/Navbaar';
import Offer from './componennt/Offer';

function App() {
  return (
    <div className="App">
   < Navbaar />  
   <Header />
   <Feature />
   <Offer/>
   <About />
   <Contact />

    </div>
  );
}

export default App;
