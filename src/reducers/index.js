import {combineReducers} from 'redux'
import users from './users'
import questions from './questions'

const allReducer=combineReducers({
    users,questions
})

export default allReducer