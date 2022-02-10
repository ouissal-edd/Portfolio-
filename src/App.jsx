import Intro from "./components/intro/intro";
import About from "./components/about/About";
import ProjectList from "./components/listProject/ProjectList";
import Contact from "./components/contact/Contact";
import { Competance } from "./components/competances/Competance";



const App = () => {
  return (
    <div>
      <Intro />
      <Competance />
      <ProjectList />
      <About />
      <Contact />



    </div>
  );
};

export default App;
