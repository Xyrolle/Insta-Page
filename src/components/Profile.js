import React, { Component } from 'react';

import '../styles/Profile.css';

class Profile extends Component {
	render() {
		return (
			<div className='container'>
				<div className='profile'>
					<div className='profile-image'>
						<img
							src='https://scontent.ftce1-1.fna.fbcdn.net/v/t31.0-8/28699339_1800252690025521_408383212689030042_o.png?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=dazkzvT3t7QAX_XfW7N&_nc_ht=scontent.ftce1-1.fna&oh=2067ceadfd27fcd66a10fe627b249d77&oe=5F00CEA0'
							alt='ebsintegrator-logo'
						/>
					</div>
					<div className='profile-user-info'>
						<h1 className='profile-user-name'>ebsintegrator</h1>
						<div className='profile-stats'>
							<ul>
								<li>
									<span className='profile-stat-count'>48</span> posts
								</li>
								<li>
									<span className='profile-stat-count'>113</span> followers
								</li>
								<li>
									<span className='profile-stat-count'>130</span> following
								</li>
							</ul>
						</div>
						<div className='followed-by'>
							<p>
								Followed by
								<span className='followers'> neularseni, hmeli.serghei, vasilie.diaconuu </span>
								+ 16 more
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
