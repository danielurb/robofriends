import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	render() {
		const { name, email, id } = this.props.user;
		return (
			<>
				{/* <h1>RoboFriends</h1> */}
				<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
					<img src={`https://robohash.org/${id}?200x200`} alt='robot' />
					<div>
						<h2>{name}</h2>
						<p>{email}</p>
					</div>
				</div>
			</>
		);
	}
}
