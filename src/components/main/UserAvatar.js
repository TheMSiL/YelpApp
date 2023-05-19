import avatar from '../../assets/leftSide/avatar.svg';

const UserAvatar = () => {
	return (
		<div className='avatar'>
			<div className='avatar-box'>
				<img src={avatar} alt='avatar-img' />
			</div>
			<p className='avatar-name'>Max Silka</p>
		</div>
	);
};

export default UserAvatar;
