import { render } from 'react-dom';
import React from 'react';
import MainContainer from './containers/MainContainer';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom';

render(<Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={MainContainer} />
    </BrowserRouter>
</Provider>,
    document.getElementById('root'));
