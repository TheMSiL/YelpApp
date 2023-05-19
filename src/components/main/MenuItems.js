import { useContext, useEffect, useRef, useCallback, useMemo } from 'react';
import { AppContext } from '../../context/DataContext';
import MenuItem from './MenuItem';
import { menuList } from './menuList';

const MenuItems = () => {
	const { currentDish } = useContext(AppContext);

	const scrollRef = useRef(null);

	const scrollToTop = useCallback(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = 0;
		}
	}, []);

	useEffect(() => {
		scrollToTop();
	}, [currentDish, scrollToTop]);

	const filteredItems = useMemo(() => {
		if (currentDish === 'All') {
			return menuList.flatMap(item => item.positions);
		} else {
			const selectedType = menuList.find(item => item.selector === currentDish);
			return selectedType ? selectedType.positions : [];
		}
	}, [currentDish]);

	return (
		<div className='menu-items' ref={scrollRef}>
			{filteredItems.map(({ name, img, description, price, type }) => (
				<MenuItem
					key={name}
					name={name}
					img={img}
					description={description}
					price={price}
					type={type}
				/>
			))}
		</div>
	);
};

export default MenuItems;
