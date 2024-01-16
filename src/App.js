import './App.css';
import Header from './header/Header'
import WhatWeDo from './pages/Whatwedo';
import Pastevent from './past-event/Pastevent';
import Team from './team-page/Team';
import Announce from './announcements/Announce';
import OurHistory from './ourhistory/Ourhistory';
import Bottom from './bottom/Bottom';
function App() {
  return (
   <>
   <Header/>
   <WhatWeDo/>
   <Pastevent/>
   <Announce/>
   <OurHistory/>
   <Team/>
   <Bottom/>
   </>
  );
}

export default App;
