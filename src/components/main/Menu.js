import { useContext } from 'react';
import { AppContext } from '../../context/DataContext';
import sort from '../../assets/primary/menu/sort.svg';
import MenuItems from './MenuItems';

const Menu = () => {
	const { currentDish } = useContext(AppContext);
	return (
		<div className='menu'>
			<div className='menu-top'>
				<h2>{currentDish === 'All' ? 'All Items' : currentDish}</h2>
				<button className='menu-btn'>
					<img src={sort} alt='arrow' />
				</button>
			</div>
			<MenuItems />
		</div>
	);
};

export default Menu;
