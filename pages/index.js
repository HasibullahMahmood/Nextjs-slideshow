import { Component } from 'react';
import Slideshow from '../components/slide-show/slide-show';

class HomePage extends Component {
	render() {
		return (
			<div className="home">
				<Slideshow photos={photos} />
			</div>
		);
	}
}

export default HomePage;

const photos = [
	{ id: 'p1', image: '/images/image1.jpg', caption: 'First image' },
	{ id: 'p2', image: '/images/image2.jpg', caption: 'second image' },
	{ id: 'p3', image: '/images/image3.jpg', caption: 'third image' },
	{ id: 'p4', image: '/images/image4.jpg', caption: 'fourth image' },
];
