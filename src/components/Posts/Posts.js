import React from 'react';
import Card from 'src/components/commons/Card/Card';

const Posts = (props) => {
	const {data} = props;
	let postsRender = null;
	if (data && data.length) {
		postsRender = (
			<ul>
				{data.map((item, index) => <li key={item.id}><Card item={item}/></li>)}
			</ul>
		)
	}
	return postsRender;
}

export default Posts
