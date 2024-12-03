import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';
import MatchCentre from './views/MatchCentre';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/match-centre" element = {<MatchCentre />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/forgot-password" element = {<ForgotPassword />} />
        <Route path = "/my-profile" element = {<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    
  );
}

export default App;
