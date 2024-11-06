import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/Homepage/About/About';
import Project from './Pages/Homepage/Project/Project';
import Started from './Pages/Homepage/Started/Started';
import Donate from './Pages/Donate/Donate';
import Donate2 from './Pages/Donate/Donate2';

const App = () => {
  return (
    <BrowserRouter>  
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="started" element={<Started />} />
        <Route path="donate" element={<Donate />} />
        <Route path="donate2" element={<Donate2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
