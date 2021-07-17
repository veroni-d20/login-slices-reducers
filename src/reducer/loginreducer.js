//import redux from 'redux';
const redux = require('redux')

//export const Action ={type:'login', payload}|{type:'logout'};

export function login () {
    type:'login',
    payload
}

export function logout () {
    type:'login'
}

//ACTIONS
const login = 'login'
const logout = 'logout'
const loginFailed = 'loginFailed'
const setIsButtonDisabled = 'setIsButtonDisabled'

//INITIAL STATE
const initialState = {
    user:null,
    message:'',
    isError:'',
    isButtonDisabled:''
};


export default (state = initialState, action) => {
    switch (action.type) {
      case login: return {
        ...state,
        user: action.payload
      }
      case logout: return {
        ...state,
        user: null
      }
      case loginFailed: return {
        ...state,
        message = "Incorrect username or password",
        isError = action.payload
      }
      case setIsButtonDisabled: return {
        ...state,
        isButtonDisabled= action.payload
      }
      default:
        return state
    }
  }

