import AuthForm from '../components/auth/AuthForm';
import Title from '../components/Title';
import FruitsBorder from '../components/auth/FruitsBorder';

const LoginPage = () => {
	return (
		<div className='auth-page_container'>
			<Title title='Welcome To Yelp App' styleName='title-container-auth' />
			<AuthForm />
			<FruitsBorder />
		</div>
	);
};

export default LoginPage;
