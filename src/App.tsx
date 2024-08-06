import About from "./Componentes/About/About";
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
    </div>
  );
};

export default App;
