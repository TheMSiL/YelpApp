import useAppContext from '../../hooks/useAppContext';
import Title from '../Title';
import Articles from './Articles';
import Basket from './Basket';
import Discount from './Discount';
import FoodNav from './FoodNav';
import Menu from './Menu';
import Tools from './Tools';

const Primary = () => {
	const { showBasket } = useAppContext();
	return (
		<div className='primary'>
			<div className='primary-header'>
				<Title title='Welcome To Lucknow' styleName='title-container-main' />
				<Tools />
			</div>
			<div className='primary-middle'>
				<FoodNav />
				<Discount />
			</div>
			<div className='primary-footer'>
				<Menu />
				<Articles />
			</div>
			{showBasket && <Basket />}
		</div>
	);
};

export default Primary;
