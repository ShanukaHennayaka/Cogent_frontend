import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Overview from "./components/EventOverview/eventOverview";
import Speakers from "./components/Speakers/speakers";
import Agenda from "./components/Agenda/agenda";
import About from "./components/About/about";
import Register from "./components/Register/register";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Overview />
      <Speakers />
      <Agenda />
      <About />
      <Register />
      <Footer />
    </div>
  );
}

export default App;