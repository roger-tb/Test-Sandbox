import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/reducer'
import configureStore from './store';
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
// const store = createStore(reducer)
ReactDOM.render(
    <Provider store={configureStore()}>
     <App />
    </Provider>,
    document.getElementById('root')
   );
