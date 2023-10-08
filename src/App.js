import './App.css';
import About from './components/about';
import AboutLiveSession from './components/aboutLiveSession';
import AboutSession from './components/aboutSession';
import Clients from './components/clients';
import Footer from './components/footer';
import Learning from './components/learning';
import TrendingSpeaker from './components/trendingSpeaker';
function App() {
  return (
    <div >
      <AboutSession />
      <AboutLiveSession/>
      <Learning />
      <Clients />
      <About />
      <TrendingSpeaker />
      <Footer />

    </div>


  );
}

export default App;
