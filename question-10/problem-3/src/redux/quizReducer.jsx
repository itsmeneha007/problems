import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, SUBMIT_ANSWER, RESET_QUIZ } from './actionTypes';

const initialState = {
  questions: [],
  score: 0,
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload };
    case FETCH_QUESTIONS_FAILURE:
      return { ...state, error: action.payload };
    case SUBMIT_ANSWER:
      return { ...state, score: state.score + (action.payload.isCorrect ? 1 : 0) };
    case RESET_QUIZ:
      return { ...state, score: 0 };
    default:
      return state;
  }
};

export default quizReducer;