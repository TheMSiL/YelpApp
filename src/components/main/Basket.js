import React, { useCallback, useContext, useMemo, useState } from 'react';
import arrow from '../../assets/leftSide/arrow.svg';
import watch from '../../assets/primary/watch.jpg';
import { AppContext } from '../../context/DataContext';
import BasketItem from './BasketItem';
import { foodItems } from './FoodNav';

const Basket = () => {
	const { setShowBasket, basketItems, setBasketItems } = useContext(AppContext);
	const [isOrdered, setIsOrdered] = useState(false);

	const calculateTotalPrice = useMemo(() => {
		let totalPrice = 0;
		basketItems.forEach(item => {
			if (item.quantity > 1) {
				totalPrice += item.price * item.quantity;
			} else {
				totalPrice += item.price;
			}
		});
		return totalPrice;
	}, [basketItems]);

	const order = useCallback(() => {
		setIsOrdered(prev => !prev);
		if (isOrdered) {
			setBasketItems([]);
		}
	}, [isOrdered, setIsOrdered, setBasketItems]);

	const changeShow = useCallback(() => {
		setShowBasket(prev => !prev);
	}, [setShowBasket]);

	return (
		<div className='basket'>
			{!isOrdered ? (
				<>
					<div className='basket-header'>
						<h2 className='basket-header-title'>Basket</h2>
						<button className='articles-btn' onClick={changeShow}>
							<img src={arrow} alt='arrow' />
						</button>
					</div>
					<div className='basket-items'>
						{basketItems.map(item => {
							const foodItem = foodItems.find(food => food.name === item.type);
							return (
								<BasketItem
									key={item.name}
									name={item.name}
									price={item.price}
									description={item.description}
									src={foodItem ? foodItem.img : ''}
								/>
							);
						})}
					</div>
				</>
			) : (
				<>
					{basketItems.length > 0 ? (
						<div className='watch'>
							<img src={watch} alt='watch' />
							<p>in the process of cooking...</p>
						</div>
					) : (
						<div className='order-error'>You didn't add any dishes</div>
					)}
				</>
			)}
			<button
				className={basketItems.length ? 'basket-btn' : 'none'}
				onClick={order}
			>
				{!isOrdered ? `Order - ${calculateTotalPrice} $` : 'Order More'}
			</button>
		</div>
	);
};

export default Basket;
