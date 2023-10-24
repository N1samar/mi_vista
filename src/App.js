import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/login';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/'exact render ={ props=> (<Login{...props} />)}></Route>
          <Route path='/dashboard'exact render ={ props=> (<Dashboard {...props} />)}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
