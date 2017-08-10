"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//import REDUCERS
import reducers from './reducers/index';

// import Actions
import {addToCart} from './actions/cartAction';
import {postBooks, deleteBooks, updateBooks} from './actions/booksAction';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';

render(

    <Provider store={store}>
    	<BooksList />
    </Provider>, document.getElementById('app')
 
	);

