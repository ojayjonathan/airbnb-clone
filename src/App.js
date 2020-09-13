import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter , Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <Switch>
           <Route path='/search'>
              <SearchPage />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
