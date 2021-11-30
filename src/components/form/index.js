import React from 'react';
import { useState } from 'react';
import './form.scss';

function Form({ setName, setRequest }) {

  const [method, setMethod] = useState('');

  function handleClick(e) {
    let method = {
      method: e.target.id.toUpperCase(),
      url: 'https://pokeapi.co/api/v2/pokemon/',
    }
    setMethod(method);
    setRequest(method);
  }

  function handleSubmit(e){
    e.preventDefault();
    let name = e.target.pokename.value;
    setName(name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Pokemon Name or ID: </span>
          <input name='pokename' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleClick} id="get">GET</span>
          <span onClick={handleClick} id="post">POST</span>
          <span onClick={handleClick} id="put">PUT</span>
          <span onClick={handleClick} id="delete">DELETE</span>
        </label>
        <label>
          <pre>{method.method === 'POST' || method === 'PUT' ? <input type="textarea"
            name="textValue" /> : null}</pre>
        </label>
      </form>
    </>
  );

}

export default Form;
