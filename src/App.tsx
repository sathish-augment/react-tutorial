import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

// Assets
//import logo from './logo.svg';
import './App.css';

// Components
const MainConcepts = lazy(() => import('./components/views/MainConcepts'));
 
const App = () => {

  return (
    <div className="App">
      <header className="header">
        <ul>
          <li><a href="/main-concepts">React - MainConcepts</a></li>
        </ul>
      </header>
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route path="/main-concepts" component={MainConcepts} />
           </Switch>
         </Suspense>
       </Router>
       <footer>

       </footer>
    </div>
  );
}

export default App;
