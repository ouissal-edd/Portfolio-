import Intro from "./components/intro/intro";
import About from "./components/about/About";
import ProjectList from "./components/listProject/ProjectList";
import Contact from "./components/contact/Contact";
import { Competance } from "./components/competances/Competance";
import './app.css';





const App = () => {
  return (
    <div className="parent">
      <Intro />
      <Competance />
      <ProjectList />
      <About />
      <Contact />



    </div>
  );
};

export default App;
