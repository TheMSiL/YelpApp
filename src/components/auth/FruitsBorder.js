import grapes from '../../assets/auth/grapes.svg';
import apple from '../../assets/auth/bitten-apple.svg';
import leaf from '../../assets/auth/leaf.svg';
import orange from '../../assets/auth/orange.svg';

const fruits = [
	{ name: 'grapes', path: grapes },
	{ name: 'leaf', path: leaf },
	{ name: 'apple', path: apple },
	{ name: 'orange', path: orange },
];

const FruitsBorder = () => {
	return (
		<div>
			{fruits.map(({ name, path }) => {
				return <img className={name} src={path} alt={name} key={name} />;
			})}
		</div>
	);
};

export default FruitsBorder;
