import React, { useState, useEffect } from "react";
import Body from "../../components/layout/Body/Body";
import { ButtonPrimary } from "../../components/units/Button/Button";
import Spinner from "../../components/units/Spinner/Spinner";
import Colors from "../../theme/Colors";
import { useHistory } from "react-router-dom";

// Styles
import { QuoteByQueryStyled } from "./QuoteByQueryStyled.styles";
import { Card, Container } from "./../../theme/GlobalComponents";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuotes,
  fetchQuoteByCategory,
  fetchQuoteByQuery,
} from "../../store/quotes/quotes.action";
import {
  QUOTES_STATUS,
  setSelectedQuote,
} from "../../store/quotes/quotes.slice";

export default function QuoteByQuery() {
  const dispatch = useDispatch();
  const queryQuote = useSelector((state) => state.quotes.queryQuote);
  const quotesStatus = useSelector((state) => state.quotes.status);
  const [query, setQuery] = useState("");

  const handleQueryQuote = (event) => {
    setQuery(event.target.value);
    if (query.length > 4) {
      dispatch(fetchQuoteByQuery(query));
    }
  };

  return (
    <Body>
      <QuoteByQueryStyled>
        <div>
          <div>
            <input
              className="query-input"
              placeholder="write your query to search a quote"
              onKeyUp={handleQueryQuote}
            ></input>
          </div>
          <div>
            {quotesStatus === QUOTES_STATUS.FULFILLED &&(
              <div>
                <h2>
                  {queryQuote.result.map((query) => (
                    <p>{query.value}</p>
                  ))}
                </h2>
              </div>
            )}
          </div>
        </div>
      </QuoteByQueryStyled>
    </Body>
  );
}
