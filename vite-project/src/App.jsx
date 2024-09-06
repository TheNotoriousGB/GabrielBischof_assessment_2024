import Hero from './components/Hero';
import HotelSection from './components/HotelSection';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import './index.css'; 
 //cd vite-project and run npm run dev to start the development server
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HotelSection />
      <Footer />
    </div>
  );
}

export default App;
