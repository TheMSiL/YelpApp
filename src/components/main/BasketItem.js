import { useCallback, useState } from 'react';
import useAppContext from '../../hooks/useAppContext';

const BasketItem = props => {
	const [quantity, setQuantity] = useState(1);
	const { setBasketItems } = useAppContext();

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

	const subtract = useCallback(() => {
		if (quantity === 1) {
			return;
		}
		setQuantity(prevQuantity => prevQuantity - 1);
		setBasketItems(prevItems => {
			const updatedItems = prevItems.map(item => {
				if (item.name === props.name) {
					return { ...item, quantity: quantity - 1 };
				}
				return item;
			});
			return updatedItems;
		});
	}, [setBasketItems, props.name, quantity]);

	return (
		<div className='basket-item'>
			<div className='basket-item-imgBox'>
				<img src={props.src} alt='item' />
			</div>
			<div className='basket-item-info'>
				<p className='basket-item-info-title'>{props.name}</p>
				<div className='basket-item-info-count'>
					<button
						className='basket-item-info-count-subtract'
						onClick={subtract}
					>
						-
					</button>
					<p className='basket-item-info-count-num'>{quantity}</p>
					<button className='basket-item-info-count-add' onClick={add}>
						+
					</button>
				</div>
				<p className='basket-item-info-amount'>${props.price}</p>
				<button className='basket-item-info-delete' onClick={remove} />
				<p className='basket-item-info-text'>{props.description}</p>
			</div>
		</div>
	);
};

export default BasketItem;
