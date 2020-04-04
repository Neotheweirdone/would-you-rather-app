import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import {_getUsers } from '../_DATA.js'

export function handleInitialData(){
    return(dispatch)=>{
        return _getUsers().then((users)=>{
            dispatch(receiveUsers(users))
        })
    }
}