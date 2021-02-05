import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SignupForm from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MoviesList from './components/MoviePage/MoviesPage';

import './index.css'
import SearchPage from "./components/Search/SearchPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className='navbar-container'>
          <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <Switch>
              <Route path="/signup">
                <SignupForm/>
              </Route>
            </Switch>
          )}
      </div>
      <div className='body-container'>
        <Route path='/movies/search'>
          <SearchPage />
        </Route>
        <Route path='/movies/discover'>
          <MoviesList/>
        </Route>
      </div>
    </>
  );
}

export default App;