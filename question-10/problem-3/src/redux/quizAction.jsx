import axios from 'axios';
import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, SUBMIT_ANSWER, RESET_QUIZ } from './actionTypes';

export const fetchQuestions = () => async (dispatch) => {
  try {
    const res = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
};

export const submitAnswer = (isCorrect) => {
  return { type: SUBMIT_ANSWER, payload: { isCorrect } };
};

export const resetQuiz = () => {
  return { type: RESET_QUIZ };
};