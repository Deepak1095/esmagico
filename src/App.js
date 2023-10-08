import './App.css';
import About from './components/about';
import AboutSession from './components/aboutSession';
import Clients from './components/clients';
import Footer from './components/footer';
import RegistrationForm from './components/registrationForm';
import TrendingSpeaker from './components/trendingSpeaker';
function App() {
  return (
<div >
  <RegistrationForm/>
<AboutSession/>
<Clients/>
<About/>
 <TrendingSpeaker/>
 <Footer />

</div>


  );
}

export default App;
