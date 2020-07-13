import React, { useState } from "react";
import "./App.css";

const Quotations = () => {
  let [quotes, setquotes] = useState([
    {
      id: 1,
      title: "Bill Gates",
      quotation: `"If you can't make it good, at least make it look good."`,
    },
    {
      id: 2,
      title: "Jack Ma",
      quotation: `"If you’ve never tried, how will you ever know if there’s any chance?"`,
    },
    {
      id: 3,
      title: "Eleanor Roosevelt",
      quotation: `"The future belongs to those who believe in the beauty of their dreams."`,
    },
    {
      id: 4,
      title: "Benjamin Franklin",
      quotation: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    },
    {
      id: 5,
      title: "Milton Berle",
      quotation: `"If opportunity doesn’t knock, build a door."`,
    },
    {
      id: 6,
      title: "Tony Robbins",
      quotation: `"The only impossible journey is the one you never begin."`,
    },
    {
      id: 7,
      title: "Helen Keller",
      quotation: `"Life is either a daring adventure or nothing at all."`,
    },
    {
      id: 8,
      title: "John D",
      quotation: `"Don't be afraid to give up the good to go for the great."`,
    },
    {
      id: 9,
      title: "Oprah Winfrey",
      quotation: `"You become what you believe."`,
    },
    {
      id: 10,
      title: "Confucius",
      quotation: `"It does not matter how slowly you go as long as you do not stop."`,
    },
  ]);
  let [quoteid, setQuoteId] = useState(1);
  return (
    <div>
      <h1 className="heading">Quotations App</h1>
      <div className="container">
        <div className="app">
          <div className="quotes">
            {quoteid <= quotes.length
              ? quotes
                  .filter((quote) => quote.id === quoteid)
                  .map((quotations) => quotations.quotation)
              : setQuoteId(1)}
          </div>
          <div className="title">
            {quoteid <= quotes.length
              ? quotes
                  .filter((quote) => quote.id === quoteid)
                  .map((quotations) => quotations.title)
              : setQuoteId(1)}
          </div>
          <br />
          <button className="button" onClick={() => setQuoteId(++quoteid)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotations;
