import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map(user => (
				<Card user={user} key={user.id} />
			))}
		</div>
	);
};

export default CardList;
