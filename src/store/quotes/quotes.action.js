import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async (params, thunkAPI) => {
	try {
		const response = await axios({
			method: 'get',
			url: 'https://api.chucknorris.io/jokes/categories',
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const fetchQuoteByCategory = createAsyncThunk('quotes/fetchQuoteByCategory', async (category, thunkAPI) => {
	try {
		const response = await axios({
			method: 'get',
			url: `https://api.chucknorris.io/jokes/random?category=${category}`,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const fetchQuoteByQuery = createAsyncThunk('quotes/fetchQuoteByQuery', async (query, thunkAPI) => {
	try {
		const response = await axios({
			method: 'get',
			url: `https://api.chucknorris.io/jokes/search?query=${query}`,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
});