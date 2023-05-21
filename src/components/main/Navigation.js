import { useState } from 'react';
import Icon from './Icon';

export const list = [
	{ name: 'Home', svgName: 'home' },
	{ name: 'Menu', svgName: 'menu' },
	{ name: 'Trending', svgName: 'trending' },
	{ name: 'Settings', svgName: 'settings' },
];

const Navigation = () => {
	const [active, setActive] = useState(list[0]);

	const handleFind = name => {
		setActive(list.find(x => x.name === name));
	};
	return (
		<>
		<div className='nav'>
			{list.map(({ name, svgName }) => {
				return (
					<div
						key={name}
						className={
							active.name === name ? 'nav-link nav-link-active' : 'nav-link'
						}
						onClick={() => handleFind(name)}
					>
						<div className='nav-link-icon'>
							<Icon name={svgName} />
						</div>
						<span>{name}</span>
					</div>
				);
			})}
		</div>
		</>
	);
};

export default Navigation;
