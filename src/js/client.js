import {createStore} from 'redux'

const reducer = (state,action) =>{
  switch (action.type) {
    case 'INC':
      state += action.payload
      break;
    case 'DEC':
      state -= action.payload
      break;
  
    default:
      break;
  }
  return state;
}
const store = createStore(reducer,0);

store.subscribe(()=>{
  console.log('Store changed',store.getState())
})

store.dispatch({
  type:'INC',
  payload: 1
})
store.dispatch({
  type:'INC',
  payload: 1
})
store.dispatch({
  type:'DEC',
  payload: 1
})
store.dispatch({
  type:'INC',
  payload: 1
})
store.dispatch({
  type:'INC',
  payload: 1
})