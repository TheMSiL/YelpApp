import { Link } from 'react-router-dom';
import deliver from '../../assets/leftSide/deliver.svg';
import arrow from '../../assets/leftSide/arrow.svg';

const Deliver = () => {
	return (
		<div className='deliver'>
			<img src={deliver} alt='deliver' />
			<div className='deliver-info'>
				<p className='deliver-info_title'>Faster delivery!</p>
				<p className='deliver-info_text'>Know more</p>
				<Link to='/' children={<img src={arrow} alt='arrow' />} />
			</div>
		</div>
	);
};

export default Deliver;
