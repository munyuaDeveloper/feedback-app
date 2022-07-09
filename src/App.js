
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./componets/Header";
import FeedbackList from "./componets/FeedbackList";
import FeedbackStat from "./componets/FeedbackStat";
import FeedbackForm from "./componets/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './componets/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStat />
                <FeedbackList />
                <AboutIconLink />
              </>
            } />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>

      </Router>
    </FeedbackProvider>
  );
}

export default App;
