import { NavLink } from 'react-router-dom';

const Link = ({ children, to }) => {
	return (
		<NavLink to={to} id={children}>
			{children}
		</NavLink>
	);
};

export default Link;
