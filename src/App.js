import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Service from './pages/service/service';
import Pricing from './pages/pricing/Pricing'
import BlogGrid from './pages/page/BlogGrid/BlogGrid';
import TheTeam from './pages/page/TheTeam/TheTeam';
import Testimonials from './pages/page/Testimonials/Testimonials';
import Appointments from './pages/page/Appoitments/Appointments';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/service' element={<Service />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/blogGrid' element={<BlogGrid />}/>
          <Route path='/theTeam' element={<TheTeam />}/>
          <Route path='/testimonial' element={<Testimonials />}/>
          <Route path='/appointment' element={<Appointments />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
