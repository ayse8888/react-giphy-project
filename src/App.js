import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Trending from './components/Trending'
import Search from './components/Search'
import NavBar from './components/NavBar'
import GiphDetails from './components/GiphDetails'


  const App = () => {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <div className="container">
            <div className="row">
              <NavBar />
                <Switch>
                  <Route exact path="/" >
                    <Trending />
                  </Route>
                  <Route exact path="/search" >
                    <Search />
                  </Route>
                  <Route path="/giph/:giphID" >
                    <GiphDetails />
                  </Route>
                </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App