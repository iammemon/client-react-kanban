// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './app/components/App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./app/reducers";
import persistMiddleware from "./app/middleware/persistMiddleware";
import App from "./app/components/App";

// Extract initial redux state received from the server
const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;

const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(persistMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App isGuest={true} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
// ReactDOM.render(<App isGuest/>,document.getElementById('app'));