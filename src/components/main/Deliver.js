import { NavLink } from 'react-router-dom';
import arrow from '../../assets/leftSide/arrow.svg';
import deliver from '../../assets/leftSide/deliver.svg';

const Deliver = () => {
	return (
		<div className='deliver'>
			<img src={deliver} alt='deliver' />
			<div className='deliver-info'>
				<p className='deliver-info_title'>Faster delivery!</p>
				<p className='deliver-info_text'>Know more</p>
				<NavLink to='/'>
					<img src={arrow} alt='arrow' />
				</NavLink>
			</div>
		</div>
	);
};

export default Deliver;
