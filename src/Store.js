import {createStore, combineReducers,applyMiddleware} from 'redux'
import reducer from './reducer/reducer';
import {logger} from 'redux-logger'


// const combinereducer = combineReducers({
//     reducer,
// })

const Store = createStore(reducer, applyMiddleware(logger))

export default Store;