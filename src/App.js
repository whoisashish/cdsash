import './App.css';
import ApeLogo from "./Ape_Circle.png";
import Header from './components/header';
// import Footer from './components/footer';
import { BsArrowRight } from"react-icons/bs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div id="main-content">
          <div className="center_keeper">
            <img src={ApeLogo} alt="CDS Ash Ape" className="home_center_logo" />
            <div className="abs_holders"><div className="logo_title">CDS ASH</div></div>
          </div>        
          <div className="logo_desc">
            A love letter to all Fellow Aspirants in the form of Notes.
          </div>
          <div className='start_to_study'>
            <span className='start_text'>Click to Study</span>
            <div className='arrow'>
              <a href='/revise'><div className='arrow-in'><BsArrowRight /></div></a>
            </div>
          </div>
          <div>
          </div>
        </div>
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default App;
