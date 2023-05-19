const FoodNavItem = ({ name, img }) => {
	return (
		<>
			<img src={img} alt={name} />
			<p className='food-nav-text'>{name}</p>
		</>
	);
};

export default FoodNavItem;
