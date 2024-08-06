import About from "./Componentes/About/About";
import Contact from "./Componentes/Contact/Contact";
import Footer from "./Componentes/Footer/Footer";
import MyWork from "./Componentes/MyWork/MyWork";
import Navbar from "./Componentes/Navbar/Navbar";
import Perfil from "./Componentes/Perfil/Perfil";
import Services from "./Componentes/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Perfil />
      <About />
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
