import React from 'react';
import PropTypes from 'prop-types';

export default function Answers({ question: { answers, id }, handleChange, data }) {
  return (
    <>
      {answers.map((answer) => (
        <div id="questions" key={answer}>
          <label htmlFor={id} onChange={handleChange}>
            <input id={id} value={answer} type="radio" name={answers} checked={data[id] === answer} />
            {answer}
          </label>
        </div>
      ))}
    </>
  );
}

Answers.propTypes = ({
  answers: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
