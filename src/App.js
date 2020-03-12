import React from 'react';
import './App.css';
import Pr from './Profile';
import Resume from './Resume';
import {BrowserRouter,Route,Link} from 'react-router-dom';

let App=()=>{
  return(
    <BrowserRouter>
        <Route exact path="/" component={Pr}/>
        <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>
  )
}
export default App;
 