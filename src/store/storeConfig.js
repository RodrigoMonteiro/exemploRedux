import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeroReducer'


const allreducers = combineReducers({
    numeros: numerosReducer
    }
)


function storeConfig() {
    return createStore(allreducers)
}

export default storeConfig