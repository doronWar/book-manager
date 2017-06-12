import { createStore, combineReducers} from 'redux'
import BookArr from './Reducers/BookArrReducer'
import CurentBook from './Reducers/CurentBookReducer'


const reducer = combineReducers({
  BookArr,
  CurentBook
});

const store = createStore(reducer);

export default store;