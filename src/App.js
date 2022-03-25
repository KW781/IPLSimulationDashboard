import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar.js';

import FeedbackPage from './pages/FeedbackPage.js';
import HomePage from './pages/HomePage.js';
import StatsViewer from './pages/StatsViewer.js';
import PageNotFound from './pages/PageNotFound.js'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/stats-viewer' element={<StatsViewer />}/>
        <Route path='/feedback-page' element={<FeedbackPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
