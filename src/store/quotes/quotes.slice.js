import {createSlice} from '@reduxjs/toolkit';
import { fetchQuoteByCategory, fetchQuoteByQuery, fetchQuotes } from './quotes.action';

// 1. TYPOS DE ACCIONES para definir e identificar
// 2. DATOS DE LAS ACCIONS (parametros)
// 3. REDUCERS cambios que hacemos en el estado

export const QUOTES_STATUS = {
	INITIAL: 'INITIAL',
	PENDING: 'PENDING',
	FULFILLED: 'FULFILLED',
	FAILURE: 'FAILURE',
};

export const quotesSlice = createSlice({
	name: 'quotes',
	initialState: {
		status: QUOTES_STATUS.INITIAL,
		categories: [],
		randomCategoryQuote:[],
		queryQuote:[],
		favourites: []
	},
	reducers: {
		setQuotes(state, action) {
			state.quotes = action.payload;
			state.status = QUOTES_STATUS.FULFILLED;
		},
		addToFavourites(state,action){
          state.favourites.push(action.payload)
		},
		deleteQuote(state,action){
			state.favourites.splice(action.payload,1)
		}
	
	},
	 extraReducers: (builder) => {
	 	builder.addCase(fetchQuotes.pending, (state, action) => {
	 		state.status = QUOTES_STATUS.PENDING;
	 	});
	 	builder.addCase(fetchQuotes.fulfilled, (state, action) => {
	 		state.categories = action.payload;
	 		state.status = QUOTES_STATUS.FULFILLED;
	 	});
	 	builder.addCase(fetchQuotes.rejected, (state, action) => {
	 		state.status = QUOTES_STATUS.ERROR;
	 		console.log('he recibido respuesta negativa');
	 	});

		 builder.addCase(fetchQuoteByCategory.pending, (state, action) => {
			state.status = QUOTES_STATUS.PENDING;
		});
		builder.addCase(fetchQuoteByCategory.fulfilled, (state, action) => {
			state.randomCategoryQuote = action.payload;
			state.status = QUOTES_STATUS.FULFILLED;
		});
		builder.addCase(fetchQuoteByCategory.rejected, (state, action) => {
			state.status = QUOTES_STATUS.ERROR;
			console.log('he recibido respuesta negativa');
		});


		
		builder.addCase(fetchQuoteByQuery.pending, (state, action) => {
			state.status = QUOTES_STATUS.PENDING;
		});
		builder.addCase(fetchQuoteByQuery.fulfilled, (state, action) => {
			state.queryQuote = action.payload;
			state.status = QUOTES_STATUS.FULFILLED;
		});
		builder.addCase(fetchQuoteByQuery.rejected, (state, action) => {
			state.status = QUOTES_STATUS.ERROR;
			console.log('he recibido respuesta negativa');
		});
	 },
});

// Action creators are generated for each case reducer function
export const {getQuotes, setQuotes, addToFavourites, deleteQuote} = quotesSlice.actions;

export default quotesSlice.reducer;
