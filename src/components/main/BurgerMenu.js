import React, { useState } from 'react';
import { list } from './Navigation';

const burgerList = [...list, { name: 'Articles' }, { name: 'Delivery' }];

const BurgerMenu = () => {
	const [showBurger, setShowBurger] = useState(false);

	const toggleBurger = () => {
		setShowBurger(prev => !prev);
	};
	return (
		<div className='burger-menu'>
			<div
				className={!showBurger ? 'burger-default' : 'burger-default_change'}
				onClick={toggleBurger}
			>
				<span
					className={
						!showBurger ? 'burger-default--1' : 'burger-default_change--1'
					}
				/>
				<span
					className={
						!showBurger ? 'burger-default--2' : 'burger-default_change--2'
					}
				/>
				<span
					className={
						!showBurger ? 'burger-default--3' : 'burger-default_change--3'
					}
				/>
			</div>
			{showBurger && (
				<nav className='burger-nav'>
					{burgerList.map(item => {
						return (
							<li className='burger-nav-li' key={item.name}>
								{item.name}
							</li>
						);
					})}
				</nav>
			)}
		</div>
	);
};

export default BurgerMenu;
