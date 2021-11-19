import React from 'react';
import TopBar from './components/TopBar/TopBar';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';
import Single from './Pages/single/Single';
import Write from './Pages/Write/Write';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const user = true;
  return (
       <Router>
          <TopBar/>
          
          <Routes>
              <Route exact path="/"       element={ <Home />}     />
              <Route path="/register"     element={ <Register />} />
              <Route path="/login"        element={  <Login />}   />
              <Route path="/write"        element={ user ? <Write /> : <Register/>}    />
              <Route path="/setting"      element={ user ? <Settings/> : <Register/>} />
              <Route path="/single" element={  <Single/>}  />

          </Routes>

      </Router>
    
  );
}

export default App;
