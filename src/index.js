
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { rootReducer } from './redux/store/store';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";


const store = createStore(rootReducer, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={ store }>
				<App />
			</Provider>
		</BrowserRouter>

	</React.StrictMode>
);

