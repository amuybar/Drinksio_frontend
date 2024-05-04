
import NavBar from '../components/NavBar.jsx';
import '../styles/Home.css';
import Hero from '../components/Hero.jsx';
import Recent from '../components/Recent.jsx';
import Explore from '../components/Explore.jsx';
import TopSellers from '../components/TopSellers.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';
import Contact from '../components/Contact.jsx';

function Home() {
  
  return (
    <div className="home-page">
      <NavBar />
      <Hero/>
      <Recent/>
      <Explore/>
      <TopSellers/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;