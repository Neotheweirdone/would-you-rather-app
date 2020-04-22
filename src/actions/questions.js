import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(text1, text2, authedUser) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

       
        return saveQuestion({
            text1,
            text2,
            authedUser
        })
            .then((question) => (addQuestion(question)))
    }
}
   