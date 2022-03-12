import {createStore} from 'redux'
import reducer from './reducer/reducer';

const Store = createStore(reducer)

export default Store;