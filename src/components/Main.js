import React, { Component } from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Top from './Top'
import MovieInfo from './MovieInfo'
import CastInfo from './CastInfo'
import { Switch, Route, Redirect } from 'react-router-dom'
import "../style/style.css";

//<Route path ='/movie/star/:id' component={CastInfo} />

class Main extends Component {

  constructor(props) {
    super(props);

    }
  render() {
    return (
      <div>
        <Header />
        <Switch>
            <Route exact path ='/home' component={Home} />
            <Route path ='/top' component={Top} />
            <Route path ='/movie/:id' component={MovieInfo} />
            <Route path ='/star/:id' component={CastInfo} />
            <Redirect to ="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
