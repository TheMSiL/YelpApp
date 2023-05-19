import w1 from '../../assets/primary/articles/w1.svg';
import w2 from '../../assets/primary/articles/w2.svg';
import like from '../../assets/primary/articles/like.svg';

const Article = ({ img, color, title }) => {
	return (
		<div className='articles-item'>
			<div className={`articles-item-imgBox articles-item-imgBox_${color}`}>
				<img src={img} alt={img} />
			</div>
			<div className='articles-item-contentBox'>
				<p className='articles-item-title'>{title}</p>
				<div className='articles-item-reviews'>
					<img className='articles-item-reviews_w1' src={w1} alt='w1' />
					<img className='articles-item-reviews_w2' src={w2} alt='w' />
					<div className='article-item-reviews_amount'>
						<img src={like} alt='like' />
						<p>28+</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
