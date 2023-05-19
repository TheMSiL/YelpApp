import authSmile from '../assets/face.svg';

const Title = ({ title, styleName }) => {
	return (
		<div className={styleName}>
			<h1>{title}</h1>
			<img src={authSmile} alt='face' />
		</div>
	);
};

export default Title;
