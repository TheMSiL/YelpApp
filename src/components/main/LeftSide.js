import { memo } from 'react';
import UserAvatar from './UserAvatar';
import Navigation from './Navigation';
import Deliver from './Deliver';

const LeftSide = () => {
	return (
		<div className='left_side-container'>
			<UserAvatar />
			<Navigation />
			<Deliver/>
		</div>
	);
};

export default memo(LeftSide);
