import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={fetchQuote}>New Quote</button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;

