import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../styles/Post.css';
import './Modal';

class Post extends Component {
	render() {
		return (
			<div className='post-item'>
				<Link
					to={{
						pathname   : `/${this.props.id}`,
						aboutProps : { img: this.props.source, descr: this.props.descr }
					}}
				>
					<img
						src={this.props.source}
						alt={this.props.descr}
						className='post-image'
						onClick={() => {
							this.props.toggleModal();
						}}
					/>
				</Link>
			</div>
		);
	}
}

export default Post;
