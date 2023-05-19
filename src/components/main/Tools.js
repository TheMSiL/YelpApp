import { getAuth, signOut as out } from 'firebase/auth';
import { useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import basket from '../../assets/primary/basket.svg';
import exit from '../../assets/primary/exit.svg';
import search from '../../assets/primary/search.svg';
import app from '../../base';
import { AppContext } from '../../context/DataContext';

const auth = getAuth(app);

const Tools = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState('');
	const { setCurrentUser, setShowBasket } = useContext(AppContext);

	const changeShow = useCallback(() => {
		setShowBasket(prev => !prev);
	}, [setShowBasket]);

	const onChange = useCallback(e => {
		setInputValue(e.target.value);
	}, []);

	const onBlur = useCallback(() => {
		setInputValue('');
	}, []);

	const signOut = async e => {
		e.preventDefault();

		await out(auth);

		setCurrentUser(null);

		localStorage.setItem('user', 'null');

		navigate('/');
	};

	const basketImage = useMemo(
		() => <img className='basket-img' src={basket} alt='basket' />,
		[]
	);
	const searchImage = useMemo(
		() => <img className='search-img' src={search} alt='search' />,
		[]
	);

	return (
		<div className='primary-header-tools'>
			<button className='basket-btn' onClick={changeShow}>
				{basketImage}
			</button>
			<div className='search'>
				<input
					value={inputValue}
					onChange={onChange}
					onBlur={onBlur}
					className='search-input'
				/>
				{searchImage}
			</div>
			<button className='exit-btn' onClick={signOut}>
				<img src={exit} alt='exit' />
			</button>
		</div>
	);
};

export default Tools;
