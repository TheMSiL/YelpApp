import Icons from '../../assets/leftSide/sprite.svg';

const Icon = ({ name, color = '#919191', size = '18px' }) => {
	return (
		<svg
			className={`icon icon-${name}`}
			fill={color}
			width={size}
			height={size}
		>
			<use xlinkHref={`${Icons}#${name}`} />
		</svg>
	);
};

export default Icon;
