import React, { Component } from 'react';

import '../styles/Modal.css';

class Modal extends Component {
	render() {
		return (
			<div>
				<div className='popup'>
					<div className='popup-inner'>
						<img src={this.props.location.aboutProps.img} alt='img' />
						<p>
							{
								this.props.location.aboutProps.descr ? this.props.location.aboutProps.descr :
								```Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra lobortis
									ligula at interdum. Suspendisse interdum diam id convallis auctor. Integer tempus in
									erat id consequat. Nulla scelerisque sit amet lectus ut ultricies. Nulla tristique a
									ante at finibus. Donec in convallis urna. Cras dolor nulla, vehicula sit amet dui
									vel, finibus suscipit massa. Morbi pharetra mi non viverra ornare. Duis in tempus
									lectus. Ut posuere sapien non elit posuere, nec auctor arcu molestie.```}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
