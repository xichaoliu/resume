import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducer';

const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        preloadedState,
        compose (
            applyMiddleware(createLogger)
        )
    );
};
//
const store = configureStore();
// let store = createStore(rootReducer,);
export default store;