import useAppContext from '../hooks/useAppContext';
import Loader from '../components/Loader';
import LeftSide from '../components/main/LeftSide';
import Primary from '../components/main/Primary';

const MainPage = () => {
	const { showLoader } = useAppContext();
	return (
		<div className='main-page_container'>
			{showLoader && <Loader />}
			<LeftSide />
			<Primary />
		</div>
	);
};

export default MainPage;
