import grapes from '../assets/auth/grapes.svg';
import apple from '../assets/loader/apple.svg';
import cheese from '../assets/loader/cheese.svg';
import orange from '../assets/loader/orange.svg';
import burger from '../assets/loader-burger.svg';
import fire from '../assets/primary/fire.svg';

const Loader = () => {
	return (
		<div className='loader'>
			<div className='loader-right'></div>
			<div className='loader-left'></div>
			<div className='loader-content'>
				<h1 className='loader-title'>Yelp App</h1>
				<p className='loader-text'>developed by Max Silka</p>
				<img className='loader-grapes' src={grapes} alt='grapes' />
				<img className='loader-burger' src={burger} alt='burger' />
				<img className='loader-apple' src={apple} alt='apple' />
				<img className='loader-orange' src={orange} alt='orange' />
				<img className='loader-fire' src={fire} alt='fire' />
				<img className='loader-cheese' src={cheese} alt='cheese' />
			</div>
		</div>
	);
};

export default Loader;
