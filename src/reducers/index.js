
'use strict'

import {combineReducers} from 'redux';

//import Reducers

import {booksReducers} from './booksReducers';
import {cartsReducers} from './cartsReducers';

// Combined Reducers

export default combineReducers({

	books: booksReducers,
	cart: cartsReducers
})