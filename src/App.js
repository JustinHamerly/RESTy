import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  let [pokemon, setPokemon] = useState([]);
  let [results, setResults] = useState({});
  let [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(response => {
        setResults(response.data);
      }).catch(e => {
        console.log('error: ', e);
      });
  }, [pokemon]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form 
      setName={setPokemon} 
      setRequest={setRequestParams}
      />
      <Results name={results.name} stats={results.stats} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
