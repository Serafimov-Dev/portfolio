import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq";
import Gallery from "./components/gallery/Gallery";

import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Faq />
      <ContactForm />
    </div>
  );
};

export default App;
