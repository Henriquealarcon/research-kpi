import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import Answers from './Answers';
// import { createAnswers } from '../redux/slice/research';
import { TextResearch } from '../styles/research.styles';

export default function Response({
  question, handleChange, data,
}) {
  return (
    <div className="questions">
      <TextResearch>
        {question.title}
      </TextResearch>
      <Answers handleChange={handleChange} question={question} data={data} />
    </div>
  );
}

Response.propTypes = ({
  answers: PropTypes.arrayOf(PropTypes.string),
}).isRequired;
