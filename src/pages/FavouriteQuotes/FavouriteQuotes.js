import React from 'react'
// import {FavoriteQuotesStyled} from "./FavouriteQuotesStyled";
import Body from "../../components/layout/Body/Body";
import { ButtonPrimary } from "../../components/units/Button/Button";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuotes,
  fetchQuoteByCategory,
} from "../../store/quotes/quotes.action";
import {
  QUOTES_STATUS,
  setSelectedQuote,
  deleteQuote
} from "../../store/quotes/quotes.slice";

export default function FavouriteQuotes() {

    const quotesfav = useSelector((state) => state.quotes.favourites)
    const dispatch = useDispatch();



    const handleDeleteQuote = (idx) => {
         dispatch(deleteQuote(idx))
    }
    return (
        <div>
            <Body>
                {/* <FavoriteQuotesStyled> */}
                   <div>
                      <span>{quotesfav.map((quote, idx) => <div key={idx}><h2>{quote}</h2> <button onClick={() => handleDeleteQuote(idx)}>X</button></div>)}  </span> 
                   </div>
                {/* </FavoriteQuotesStyled> */}
            </Body>
        </div>
    )
}
