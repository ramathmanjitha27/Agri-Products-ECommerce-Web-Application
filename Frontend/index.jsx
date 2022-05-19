import React from 'react';
// import {render} from 'react-dom';
import ReactDOM from 'react-dom'
import App from "./App";

import {store} from './app/store';
import {Provider} from 'react-redux';


// render(<h1>Hello to React</h1>, document.getElementById('app'));

// render(<App/>, document.getElementById('app'));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);