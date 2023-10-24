import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/login';
import SearchComponent from './components/Dashboard';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/'exact render ={ props=> (<Login{...props} />)}></Route>
          <Route path='/dashboard'exact render ={ props=> (<SearchComponent {...props} />)}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
