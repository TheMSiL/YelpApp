import { useContext } from 'react';
import Loader from '../components/Loader';
import LeftSide from '../components/main/LeftSide';
import Primary from '../components/main/Primary';
import { AppContext } from '../context/DataContext';

const MainPage = () => {
	const { showLoader } = useContext(AppContext);
	return (
		<>
			<div className='main-page_container'>
				{showLoader && <Loader />}
				<LeftSide />
				<Primary />
			</div>
		</>
	);
};

export default MainPage;
