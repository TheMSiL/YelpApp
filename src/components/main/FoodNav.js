import { useContext, useState, useCallback, useMemo } from 'react';
import All from '../../assets/primary/food-nav/All.svg';
import Burgers from '../../assets/primary/food-nav/Burgers.svg';
import Donuts from '../../assets/primary/food-nav/Donuts.svg';
import Drinks from '../../assets/primary/food-nav/Drinks.svg';
import Pizza from '../../assets/primary/food-nav/Pizza.svg';
import Salads from '../../assets/primary/food-nav/Salads.svg';
import { AppContext } from '../../context/DataContext';
import FoodNavItem from './FoodNavItem';

export const foodItems = [
	{
		name: 'All',
		img: All,
	},
	{
		name: 'Burgers',
		img: Burgers,
	},
	{
		name: 'Pizza',
		img: Pizza,
	},
	{
		name: 'Salads',
		img: Salads,
	},
	{
		name: 'Donuts',
		img: Donuts,
	},
	{
		name: 'Drinks',
		img: Drinks,
	},
];

const FoodNav = () => {
	const [activeItem, setActiveItem] = useState(foodItems[0]);
	const { setCurrentDish } = useContext(AppContext);

	const handleFindItem = useCallback(
		name => {
			setActiveItem(foodItems.find(x => x.name === name));
			setCurrentDish(foodItems.find(x => x.name === name)?.name);
		},
		[setCurrentDish]
	);

	const foodNavItems = useMemo(() => {
		return foodItems.map(item => (
			<div
				className={
					activeItem.name === item.name
						? 'food-nav-item food-nav-item_active'
						: 'food-nav-item'
				}
				key={item.name}
				onClick={() => handleFindItem(item.name)}
			>
				<FoodNavItem name={item.name} img={item.img} />
			</div>
		));
	}, [activeItem, handleFindItem]);

	return <div className='food-nav'>{foodNavItems}</div>;
};

export default FoodNav;
