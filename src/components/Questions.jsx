import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Answers from './Answers';
import { createAnswers } from '../redux/slice/research';

export default function Response({
  question, handleChange, data,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAnswers({ id: question.id, response: '' }));
  }, []);

  return (
    <div>
      <h2>
        {question.title}
      </h2>
      <Answers handleChange={handleChange} question={question} data={data} />
    </div>
  );
}

Response.propTypes = ({
  answers: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
