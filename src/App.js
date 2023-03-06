import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import NavBar from './Components/Navbar/NavBar';
import ContactUsSection from './Components/ContactUsSection copy/ContactUsSection';
import CallForPaper from './Components/CallForPaper/CallForPaper';
import Committee from './Components/Committee/Committee';
// import Keynote from './Components/Keynote/Keynote';
import Publication from './Components/Publication/Publication';
import Registration from './Components/Registration/Registration';
import SpeakerLottie from './Components/Speaker-Lottie/Speaker-Lottie';
import ImpDates from './Components/ImpDates/ImpDates';
import InviteSponsors from './Components/InviteSponsors/InviteSponsors';
import AuthorGuidelines from './Components/AuthorGuidelines/AuthorGuidelines';
import TravelVISA from './Components/TravelVISA/TravelVISA';
import CheckSessions from './Components/CheckSessions/CheckSessions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CheckSessions />
      <InviteSponsors />
      <ImpDates />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/call-for-paper' exact element={<CallForPaper />} />
        <Route path='/author-guidelines' exact element={<AuthorGuidelines />} />
        <Route path='/committee' exact element={<Committee />} />
        <Route path='/publication' exact element={<Publication />} />
        <Route path='/speakers' exact element={<SpeakerLottie />} />
        <Route path='/registration' exact element={<Registration />} />
        <Route path='/travel-visa' exact element={<TravelVISA />} />
      </Routes>
      <ContactUsSection />
    </div>
  );
}

// <Route path='/keynote' exact element={<Keynote />} />

export default App;
