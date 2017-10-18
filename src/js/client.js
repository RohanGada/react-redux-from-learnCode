import {
  createStore,
  combineReducers
} from 'redux'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      state = { ...state,
        name: action.payload
      };
      break;
    case 'CHANGE_AGE':
      state = { ...state,
        age: action.payload
      };
      break;

    default:
      break;
  }
  return state;
}

const tweetsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      state = [...state,action.payload]
      break;
  
    default:
      break;
  }
  return state;
}


const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})
const store = createStore(reducers);

store.subscribe(() => {
  console.log('Store changed', store.getState())
})

store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'Gada'
}) 
store.dispatch({
  type: 'CHANGE_AGE',
  payload: 1
})
store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'Rohan'
})
store.dispatch({
  type: 'INC',
  payload: 1
})
store.dispatch({
  type: 'INC',
  payload: 1
})