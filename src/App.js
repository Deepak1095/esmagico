import './App.css';
import About from './components/about';
import AboutLiveSession from './components/aboutLiveSession';
import AboutSession from './components/aboutSession';
import Clients from './components/clients';
import Footer from './components/footer';
import Head from './components/head';
import Learning from './components/learning';
import LearningSession from './components/learningSessions';
import Registration from './components/registration';
import TrendingSpeaker from './components/trendingSpeaker';
function App() {
  return (
    <div >
      <Head/>
      <Registration/>
      <AboutSession />
      <LearningSession/>
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
