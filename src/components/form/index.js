import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [url, setURL] = useState('');
  const [method, setMethod] = useState('');
  const [methodSelected, setMethodSelect] = useState('');
  const [formData, setFormData] = useState('');

  function handleURLInput(e) {
    let { value } = e.target;
    setURL(value);
  }

  function handleClick(e) {
    let method = e.target.id.toUpperCase();
    setMethod(method);
    handleSelectedMethodStyle(e.target);
  }

  function handleSelectedMethodStyle(target) {
    // if a method is already selected remove class
    if (methodSelected) {
      methodSelected.classList.remove('selected');
    }

    // set state to current span and add selected class to style
    setMethodSelect(target);
    target.classList.add('selected');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      method: method || 'GET',
      url: url,
      body: formData
    };

    props.setRequestParams(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="methods">
          <span onClick={handleClick} id="get">GET</span>
          <span onClick={handleClick} id="post">POST</span>
          <span onClick={handleClick} id="put">PUT</span>
          <span onClick={handleClick} id="delete">DELETE</span>
        </label>
        <label >
          <span>URL: </span>
          <input onChange={handleURLInput} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label>
          <pre>
            {
              method === 'POST' || method === 'PUT'
                ? <textarea onChange={(e) => setFormData(e.target.value)}></textarea>
                : null}
          </pre>
        </label>
      </form>
    </>
  );
}

export default Form;