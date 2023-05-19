import React, { useCallback, useMemo } from 'react';
import arrow from '../../assets/leftSide/arrow.svg';
import chicken from '../../assets/primary/articles/chicken.svg';
import cookie from '../../assets/primary/articles/cookie.svg';
import mask from '../../assets/primary/articles/mask.svg';
import pizza from '../../assets/primary/articles/pizza.svg';
import Article from './Article';

const articlesContent = [
	{
		img: chicken,
		color: 'yellow',
		title: 'How to cook turkey on Natural Gas',
	},
	{
		img: mask,
		color: 'blue',
		title: 'Corona virus update: 3,43,287+ cases',
	},
	{
		img: cookie,
		color: 'pink',
		title: 'Tasty chunk donuts with chocolate',
	},
	{
		img: pizza,
		color: 'aquamarine',
		title: 'Homemade double cheese with popcorn',
	},
];

const Articles = () => {
	const renderArticle = useCallback(({ img, color, title }) => {
		return <Article key={color} img={img} color={color} title={title} />;
	}, []);

	const articleList = useMemo(() => {
		return articlesContent.map(renderArticle);
	}, [renderArticle]);

	return (
		<div className='articles'>
			<div className='articles-top'>
				<h2>Articles</h2>
				<button className='articles-btn'>
					<img src={arrow} alt='arrow' />
				</button>
			</div>
			{articleList}
		</div>
	);
};

export default Articles;
