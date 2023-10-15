import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import counter from '../src/reducers/index'
import rootReducer from '../src/reducers/index';
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

store.dispatch({
  type: "ADD_TODO",
  text: "USE REDUX"
})

console.log('store.getState', store.getState())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App 
      value={store.getState()}
      onIncrement={() => store.dispatch({type: "INCREMENT"})}
      onDecrement={() => store.dispatch({type: "DECREMENT"})}
    />
    </Provider>
  </React.StrictMode>
);

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
