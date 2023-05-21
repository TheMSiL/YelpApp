import { memo } from 'react';
import UserAvatar from './UserAvatar';
import Navigation from './Navigation';
import Deliver from './Deliver';
import BurgerMenu from './BurgerMenu';

const LeftSide = () => {
	return (
		<div className='left_side-container'>
			<UserAvatar />
			<Navigation />
			<BurgerMenu />
			<Deliver />
		</div>
	);
};

export default memo(LeftSide);
