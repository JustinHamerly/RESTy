import React from 'react';
import './results.scss';

function Results(props) {
  return (
    <section>
      <pre data-testid="data">{props.name ? JSON.stringify(props.name, undefined, 2) : <p>loading Pokemon</p>}</pre>
      <pre data-testid="data">{JSON.stringify(props.stats, undefined, 2)}</pre>
    </section>
  );
}

export default Results;
