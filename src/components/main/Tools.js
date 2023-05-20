import { signOut as out } from 'firebase/auth';
import { useCallback, useState } from 'react';
import basket from '../../assets/primary/basket.svg';
import exit from '../../assets/primary/exit.svg';
import search from '../../assets/primary/search.svg';
import { auth } from '../../base';
import useAppContext from '../../hooks/useAppContext';
import useNav from '../../hooks/useNav';

const Tools = () => {
	const { goTo } = useNav();
	const [inputValue, setInputValue] = useState('');
	const { setCurrentUser, setShowBasket } = useAppContext();

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

		goTo('/');
	};

	return (
		<div className='primary-header-tools'>
			<button className='tools-basket-btn' onClick={changeShow}>
				<img className='basket-img' src={basket} alt='basket' />
			</button>
			<div className='search'>
				<input
					value={inputValue}
					onChange={onChange}
					onBlur={onBlur}
					className='search-input'
					name='search-input'
				/>
				<img className='search-img' src={search} alt='search' />
			</div>
			<button className='exit-btn' onClick={signOut}>
				<img src={exit} alt='exit' />
			</button>
		</div>
	);
};

export default Tools;
