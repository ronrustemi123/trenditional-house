import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;