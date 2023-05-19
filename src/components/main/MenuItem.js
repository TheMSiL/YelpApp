import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import fire from '../../assets/primary/fire.svg';
import like from '../../assets/primary/menu/like.svg';
import no from '../../assets/primary/menu/no.svg';
import star from '../../assets/primary/menu/star.svg';
import yes from '../../assets/primary/menu/yes.svg';
import { AppContext } from '../../context/DataContext';

const MenuItem = props => {
	const [addDish, setAddDish] = useState(false);
	const { setShowBasket, basketItems, setBasketItems } = useContext(AppContext);

	const updateBasket = useCallback(
		isAdded => {
			if (isAdded) {
				const updatedBasket = basketItems.filter(
					item => item.name !== props.name
				);
				setBasketItems(updatedBasket);
			} else {
				const newItem = {
					name: props.name,
					price: props.type === 'Burgers' ? props.price / 2 : props.price,
					description: props.description,
					type: props.type,
				};
				setBasketItems(prevItems => [...prevItems, newItem]);
			}
		},
		[
			basketItems,
			props.name,
			props.price,
			props.description,
			props.type,
			setBasketItems,
		]
	);

	const isBasketEmpty = useMemo(() => basketItems.length === 0, [basketItems]);
	const click = useCallback(() => {
		setAddDish(prev => !prev);
		updateBasket(addDish);
	}, [addDish, updateBasket]);

	useEffect(() => {
		setShowBasket(!isBasketEmpty);
	}, [isBasketEmpty, setShowBasket]);

	useEffect(() => {
		const isItemInBasket = basketItems.some(item => item.name === props.name);
		setAddDish(isItemInBasket);
	}, [basketItems, props.name]);

	const reactionImage = useMemo(
		() => (addDish ? like : props.type === 'Burgers' ? fire : star),
		[addDish, props.type]
	);
	const buttonImage = useMemo(() => (addDish ? yes : no), [addDish]);
	const menuItemClass = useMemo(
		() => `menu-item ${addDish ? 'add-dish' : ''}`,
		[addDish]
	);

	return (
		<div className={menuItemClass}>
			<div className='menu-item-images'></div>
			<img className='menu-item-dish' src={props.img} alt={props.name} />
			<img className='menu-item-reaction' src={reactionImage} alt='' />
			<div className={`menu-item-info ${addDish ? 'add' : ''}`}>
				<h4 className='menu-item-info-title'>{props.name}</h4>
				<p className='menu-item-info-description'>{props.description}</p>
				<div className='menu-item-info-footer'>
					<p className='menu-item-info-footer-price'>${props.price}</p>
					<button onClick={click} className={addDish ? 'on-btn' : 'off-btn'}>
						<img src={buttonImage} alt='dish-btn' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
