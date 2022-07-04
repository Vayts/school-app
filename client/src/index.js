import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path='/*' element={<App/>}/>
			</Routes>
		</Provider>
	</BrowserRouter>,
);
reportWebVitals();
