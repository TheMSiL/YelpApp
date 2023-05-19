import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.sass';
import { DataContext } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DataContext>
			<Router>
				<App />
			</Router>
		</DataContext>
	</React.StrictMode>
);
