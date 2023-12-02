import React from 'react';
import './App.css';
import Navbar from './Navbar';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Product';
import SearchVerse from './pages/SearchVerse';
import DailyVerse from './pages/DailyVerse';
import StoriesandAnimation from './pages/StoriesandAnimation';
import DiscussionForum from './pages/DiscussionForum';
import Likemindedpeoplecommunity from './pages/Likemindedpeoplecommunity';
import YourDownloads from './pages/YourDownloads';
import AdditionalSettings from './pages/AdditionalSettings';


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
    
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/SearchVerse' component={SearchVerse} />
          <Route path='/DailyVerse' component={DailyVerse} />
          <Route path='/StoriesandAnimation' component={StoriesandAnimation} />
          <Route path='/DiscussionForum' component={DiscussionForum} />
          <Route path='/Likemindedpeoplecommunity' component={Likemindedpeoplecommunity} />
          <Route path='/YourDownloads' component={YourDownloads} />
          <Route path='/AdditionalSettings' component={AdditionalSettings} />

        </Switch>
       
      </Router>
      
    </>
  );
}

export default App;