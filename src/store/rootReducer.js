import { combineReducers } from 'redux'
import theme from './theme/themeSlice'
import auth from './auth'
import base from './base'
import readability from './readability/readabilitySlice';
import readabilityState from './readability/readabilityStateSlice';

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        base,
        readability,
        readabilityState,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
