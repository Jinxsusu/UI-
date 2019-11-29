import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';
import 'lib-flexible';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css'
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import Prices from './pages/Prices'
import OCR from './pages/OCR'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

ReactDOM.render(<Router>
    <APP>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/prices" component={Prices}/>
            <Route path="/ocr" component={OCR}/>
        </Switch>
    </APP>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
