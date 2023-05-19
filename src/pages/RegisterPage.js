import { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import Title from '../components/Title';

import FruitsBorder from '../components/auth/FruitsBorder';

const RegisterPage = () => {
	const [showInput] = useState(true);

	return (
		<div className='auth-page_container'>
			<Title title='Welcome To Yelp App' styleName='title-container-auth' />
			<AuthForm isShown={showInput} />
			<FruitsBorder />
		</div>
	);
};

export default RegisterPage;
