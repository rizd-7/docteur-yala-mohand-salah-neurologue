// src/App.jsx
import "./App.css";
import Header from "./components/HeaderComponent";
import HeroSection from "./components/HeroSectionComponent";
import Services from "./components/ServicesComponent";
import Advices from "./components/AdvicesComponent";
import Localisation from "./components/LocalisationComponent";
import WorkTime from "./components/WorkTimeComponent";
import Benefits from "./components/BenefitsComponent";
import Footer from "./components/FooterComponent";


function App() {
  return (
    <div className="App flex flex-col scroll-smooth ">
      <Header />
      <HeroSection />
      <Services />
      <Advices />
      <WorkTime />
      <Localisation />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
