import {createStore, applyMiddleware} from 'redux'
// let a =1;
const reducer = (initialState = 0, action) => {};
const logger = (store) => (next) => (action) => {
  // console.log(next)
  // if(a <=2){
    next(action)
    // a++;
  // }
}
const middleware = applyMiddleware(logger);

const store = createStore(reducer, 1, middleware);
store.subscribe(() => {
  console.count('store changed')
})
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});