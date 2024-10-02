import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../redux/quizActions';
import Question from './Question';

const QuizPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div>
      {questions.length > 0 ? questions.map((q) => <Question key={q.id} question={q} />) : <p>Loading...</p>}
    </div>
  );
};

export default QuizPage;