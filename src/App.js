import './App.css';
import Home from './pages/Home/Home'
import QuoteCategory from './pages/QuoteCategory/QuoteCategory'
import FavouriteQuotes from './pages/FavouriteQuotes/FavouriteQuotes'
import QuoteByQuery from './pages/QuoteByQuery/QuoteByQuery'



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/quotecategory" exact>
					<QuoteCategory/>
				</Route>
        <Route path="/favouritequotes" exact>
					<FavouriteQuotes/>
				</Route>
        <Route path="/quotebyquery" exact>
					<QuoteByQuery/>
				</Route>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
