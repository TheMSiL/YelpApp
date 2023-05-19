import { useContext, useState, useCallback } from 'react';

import { AppContext } from '../../context/DataContext';
const BasketItem = props => {
	const [quantity, setQuantity] = useState(1);
	const { setBasketItems } = useContext(AppContext);

	const remove = useCallback(() => {
		setBasketItems(prevItems =>
			prevItems.filter(item => item.name !== props.name)
		);
	}, [setBasketItems, props.name]);

	const add = useCallback(() => {
		setQuantity(prevQuantity => prevQuantity + 1);
		setBasketItems(prevItems => {
			const updatedItems = prevItems.map(item => {
				if (item.name === props.name) {
					return { ...item, quantity: quantity + 1 };
				}
				return item;
			});
			return updatedItems;
		});
	}, [setBasketItems, props.name, quantity]);
	return (
		<div className='basket-item'>
			<div className='basket-item-imgBox' onClick={remove}>
				<img src={props.src} alt='item' />
			</div>
			<div className='basket-item-info'>
				<p className='basket-item-info-title'>{props.name}</p>
				<button className='basket-item-info-btn' onClick={add}>
					х{quantity}
				</button>
				<p className='basket-item-info-amount'>${props.price}</p>
				<p className='basket-item-info-text'>{props.description}</p>
			</div>
		</div>
	);
};

export default BasketItem;
