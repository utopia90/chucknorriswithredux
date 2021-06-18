import {QuoteCategoryStyled} from './QuoteCategoryStyled.styles'


import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";


// Styles
import { Card, Container } from "./../../theme/GlobalComponents";
import Body from "../../components/layout/Body/Body";
import { ButtonPrimary } from "../../components/units/Button/Button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuotes,
  fetchQuoteByCategory,
} from "../../store/quotes/quotes.action";
import {
  QUOTES_STATUS,
  setSelectedQuote,
  addToFavourites
} from "../../store/quotes/quotes.slice";

export default function QuoteCategory() {
    let history = useHistory();
    const dispatch = useDispatch();
    const categoryQuote = useSelector(
      (state) => state.quotes.randomCategoryQuote
    );
    const quotesStatus = useSelector((state) => state.quotes.status);
  


    const location = useLocation();



    useEffect(() => {
        dispatch(fetchQuoteByCategory(location.state.category));

      }, [location]);

      const handlebacktocategories = () => {
         history.push("/")
      }

      const handleAnotherRandomQuote = () => {
        dispatch(fetchQuoteByCategory(location.state.category));

     }
     const handleaddtofavourites = () => {
        dispatch(addToFavourites(categoryQuote.value));
     }

    return (
        <div>
        <Body>
        <QuoteCategoryStyled>
            <div className="card-container">
            <Card>
                <h2>{categoryQuote.value}</h2>
                <ButtonPrimary type="button" text="see another random quote" onClick={handleAnotherRandomQuote}  buttonStyles={{
                          minWidth: 150,
                          minHeight: 40,
                        }}/>
                         <ButtonPrimary type="button" text="go back to categories" onClick={handlebacktocategories}  buttonStyles={{
                          minWidth: 150,
                          minHeight: 40,
                        }}/>
                         <ButtonPrimary type="button" text="add to my favourites" onClick={handleaddtofavourites}  buttonStyles={{
                          minWidth: 150,
                          minHeight: 40,
                        }}/>
            </Card>
            </div>
            </QuoteCategoryStyled>
            </Body>
        </div>
    )
}
