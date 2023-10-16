import "./App.scss";
import About from "./Components/About/About";
import Aboutmore from "./Components/Aboutmore/Aboutmore";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Know from "./Components/Know/Know";

function App() {
  return (
    <div className="App">
      < Header  />
      <About />
      <Aboutmore/>
      <Know/>
      <Contact/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
