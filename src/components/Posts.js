import React, { Component } from 'react';

import Post from './Post';

import '../styles/Posts.css';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images : []
		};
	}

	componentDidMount() {
		let key = 'rhSFDp-4gL_Dd0HB2e9WgDZhgf1s5ZA_HZEs4YiO2hk',
			limit = 25,
			query = 'it';
		let url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=${limit}&client_id=${key}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				let images = [];
				data.results.forEach((image) => {
					images.push({
						url   : image.urls.raw + '&w=700&h=657&fit=crop',
						id    : image.id,
						descr : image.alt_description
					});
				});
				this.setState({
					images : images
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		return (
			<div className='container'>
				<div className='posts'>
					{this.state.images.map((post) => {
						return (
							<Post
								source={post.url}
								id={post.id}
								descr={post.descr}
								toggleModal={this.props.toggleModal}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Posts;
