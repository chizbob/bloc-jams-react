import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="nav-item nav-link active" href='/'><img src="./../assets/images/bloc_jams_logo.png" alt="Bloc Jams Landing" /><span className="sr-only">(current)</span></a>
               <a className="nav-item nav-link" href='/library'>Library</a>
           </nav>

           <h1>Bloc Jams</h1>

        </header>
        <main>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}


export default App;
