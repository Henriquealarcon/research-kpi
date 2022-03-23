import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';

export default function Answers({ question: { answers, id }, handleChange, data }) {
  return (
    <fieldset className="answers">
      {answers.map((answer) => (
        <div
          key={answer}
        >
          <label htmlFor={id} onChange={handleChange}>
            <input id={id} value={answer} type="radio" name={answers} checked={data[id] === answer} />
            {answer}
          </label>
        </div>
      ))}
    </fieldset>
  );
}

Answers.propTypes = ({
  answers: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
