import {configureStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit';
import quotesReducer from './../store/quotes/quotes.slice';
import { fetchQuotes } from './../store/quotes/quotes.action';
import {createLogger} from 'redux-logger';



const logger = createLogger({
	collapsed: true,
	diff: true,
});

export const combinedReducers = combineReducers({
	quotes: quotesReducer,
});

const store = configureStore({
	reducer: combinedReducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});


export default store;
