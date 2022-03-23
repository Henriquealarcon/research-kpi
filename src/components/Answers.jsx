import React from 'react';
import PropTypes from 'prop-types';

export default function Answers({ question: { answers, id }, handleChange, data }) {
  return (
    <>
      {answers.map((answer) => (
        <div
          align="center"
          border="1px solid black"
          box-shadow="0 0 1em #00000099"
          id="questions"
          key={answer}
        >
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
