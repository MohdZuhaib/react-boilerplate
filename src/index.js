import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { store, history } from './store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './containers/ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
