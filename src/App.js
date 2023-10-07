import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import image from "./assests/img.svg"
import TrendingSpeaker from './components/trendingSpeaker';
import { trendingSpeaker } from './components/data.ts';
function App() {
  return (
<div style={{ position: 'relative' }}>
{trendingSpeaker.map((speaker, index) => (
        <TrendingSpeaker
          key={index} // Provide a unique key for each speaker component
          name={speaker.name}
          role={speaker.role}
          about={speaker.about}
          image={speaker.image}
        />
      ))}
  <Footer />
</div>


  );
}

export default App;
