import './App.css';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Productive from './components/Productive';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Productive />
      <Testimonials />
    </div>
  );
}

export default App;
