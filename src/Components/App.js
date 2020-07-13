import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

import SpeciesList from "./speciesList";

import "./styles.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SpeciesList />
      </div>
    </Provider>
    
  );
}

export default App;
