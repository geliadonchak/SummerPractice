import React, {Component} from 'react';
import './App.scss';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';
import Radium from 'radium';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
   render() {
       return (
           <div>
               <nav className="nav">
                   <ul>
                       <li>
                           <NavLink to="/" exact activeClassName={'wfm-active'}>Home</NavLink>
                       </li>
                       <li>
                           <NavLink to="/about" activeStyle={{color: 'blue'}}>About</NavLink>
                       </li>
                       <li>
                           <NavLink to={{pathname: '/cars'}}>Cars</NavLink>
                       </li>
                   </ul>
               </nav>
               <hr/>

               <Switch>
                   <Route path="/" exact render={() => <h1>Home Page</h1>} />
                   <Route path="/about" component={About}/>
                   <Route path="/cars" component={Cars} />
                   <Route path="/cars/:name" component={CarDetail} />
                   <Redirect to={'/'}/>
                   {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>*/}
               </Switch>
            </div>
      );
  }
}

export default App;
