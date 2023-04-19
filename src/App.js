import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import AboutMe from './components/Main/AboutMe/AboutMe';
import Portfolio from './components/Main/Portfolio/Portfolio';
import Contact from './components/Main/Contact/Contact';
import Footer from './components/Footer';

function App () {
  return (
    <div id="app">
      <Header />
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <hr />
      <Footer />
    </div >
  );
}

export default App;
