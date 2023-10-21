import { useContext } from "react";
import "./App.scss";
import About from "./Components/About/About";
import Aboutmore from "./Components/Aboutmore/Aboutmore";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Know from "./Components/Know/Know";
import Portfolios from "./Components/Portfolios/Portfolios";
import { Context } from "./Context/Context";

function App() {
  const {svet, setSvet} = useContext(Context)
  
  return (
    <div className={svet == true?'App light':'dark App'}>
      <span className="app__span1 app__span">
        
      </span>

      < Header   />
      <span className="app__span2 app__span">
        
      </span>
      <About />
      <span className="app__span3 app__span">
        
      </span>
      <Aboutmore/>
      <span className="app__span4 app__span">
        
      </span>
      <Know/>
      <span className="app__span5 app__span">
        
      </span>
      <Portfolios/>
      <Contact/>
      <span className="app__span6 app__span"></span>
      <Footer />
    </div>
  );
}

export default App;
