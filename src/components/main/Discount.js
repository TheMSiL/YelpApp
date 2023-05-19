import fire from '../../assets/primary/fire.svg';
import burger from '../../assets/primary/burger.svg';


const Discount = () => {
	return (
		<div className='discount'>
			<div className='discount-fire'>
				<img src={fire} alt='fire' />
			</div>
			<p className='discount-title'>-50% Off</p>
			<p className='discount-text'>the full price of burgers</p>
			<img className='discount-burger' src={burger} alt='burger' />
		</div>
	);
};

export default Discount;
