import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useContext } from 'react';
import { AppContext } from './context/DataContext';
import MainPage from './pages/MainPage';

const PrivateRoute = ({ children }) => {
	let { currentUser } = useContext(AppContext);
	if (currentUser == null) {
		return <Navigate to='login' />;
	}

	return children;
};

const App = () => {
	let { currentUser } = useContext(AppContext);

	return (
		<div className='app-container'>
			<Routes>
				<Route
					path='/'
					element={
						<PrivateRoute>
							<MainPage />
						</PrivateRoute>
					}
				/>
				<Route
					path='/login'
					element={currentUser ? <Navigate to='/' /> : <LoginPage />}
				/>
				<Route path='/register' element=<RegisterPage /> />
				<Route path='*' element=<Navigate to='/login' /> />
			</Routes>
		</div>
	);
};

export default App;
