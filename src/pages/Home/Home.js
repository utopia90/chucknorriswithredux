import React, { useState, useEffect } from "react";
import Body from "../../components/layout/Body/Body";
import { ButtonPrimary } from "../../components/units/Button/Button";
import Spinner from "../../components/units/Spinner/Spinner";
import axios from "axios";
import Colors from "../../theme/Colors";
import { useHistory } from "react-router-dom";


// Styles
import { HomeStyled } from "./Home.styles";
import { Card, Container } from "./../../theme/GlobalComponents";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuotes,
  fetchQuoteByCategory,
} from "../../store/quotes/quotes.action";
import {
  QUOTES_STATUS,
  setSelectedQuote,
} from "../../store/quotes/quotes.slice";
import { getQuotes } from "../../store/quotes/quotes.slice";

export default function Home() {
	let history = useHistory();

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.quotes.categories);
  const categoryQuote = useSelector(
    (state) => state.quotes.randomCategoryQuote
  );

  const quotesStatus = useSelector((state) => state.quotes.status);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const handleCategory = (category) => {
	history.push({
		pathname: '/quotecategory',
		state: { category: category}
	});
  };

  return (
    <Body>
      <Container>
        <HomeStyled>
          <div>
            {quotesStatus === QUOTES_STATUS.PENDING ||
            quotesStatus === QUOTES_STATUS.INITIAL ? (
              <div
                style={{
                  width: "100%",
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spinner color={Colors.mainColor} fontSize={40} />
              </div>
            ) : (
              <div className="categories_block">
                <h3>Choose the category you want to see quotes of:</h3>

                <div className="tags-btns-container">
                  <div>
                    {categories.map((category, idx) => (
                      <ButtonPrimary
                        type="button"
                        buttonStyles={{
                          minWidth: 150,
                          minHeight: 40,
                        }}
                        id={idx}
                        text={category}
                        value={category}
                        onClick={() => handleCategory(category)}
                      ></ButtonPrimary>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </HomeStyled>
      </Container>
    </Body>
  );
}
