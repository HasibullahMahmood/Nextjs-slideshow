import { Component } from 'react';
import Image from 'next/image';

import styles from './slide-show.module.css';

class Slideshow extends Component {
	state = {
		totalImage: 0,
		currentImageIndex: 0,
		photos: [],
	};

	componentDidMount = () => {
		const { photos } = this.props;
		const totalImage = photos.length;
		this.setState({ totalImage, photos });
	};

	nextBtnHandler = () => {
		const { currentImageIndex, totalImage } = this.state;
		let newImageIndex = currentImageIndex + 1;
		if (newImageIndex === totalImage) {
			newImageIndex = 0;
		}
		this.setState({ currentImageIndex: newImageIndex });
	};

	prevBtnHandler = () => {
		const { currentImageIndex, totalImage } = this.state;
		let newImageIndex = currentImageIndex - 1;
		if (newImageIndex < 0) {
			newImageIndex = totalImage - 1;
		}
		this.setState({ currentImageIndex: newImageIndex });
	};

	render() {
		const { photos, currentImageIndex } = this.state;
		return (
			<section>
				<div className={styles.container}>
					{photos.map((item, idx) => {
						const showImage = idx === currentImageIndex;
						return (
							<div
								key={item.id}
								style={{ display: showImage ? 'block' : 'none' }}
								className={styles.fade}
							>
								<div className={styles.slideNumber}>
									{currentImageIndex + 1} / {photos.length}
								</div>
								<Image src={item.image} alt={item.caption} width={1000} height={350} />
								<div className={styles.caption}>{item.caption}</div>
							</div>
						);
					})}

					{/* PREV NEXT BUTTONS */}
					<div className={styles.navigation}>
						<span className={styles.prev} onClick={this.prevBtnHandler}>
							❮
						</span>
						<span className={styles.next} onClick={this.nextBtnHandler}>
							❯
						</span>
					</div>
				</div>

				{/* BOTTOM CIRCLE BUTTONS */}
				<div className={styles.dotsContainer}>
					{photos.map((item, idx) => (
						<span
							key={item.id}
							onClick={() => {
								this.setState({ currentImageIndex: idx });
							}}
							className={`${styles.dot} ${idx === currentImageIndex ? styles.active : ''}`}
						></span>
					))}
				</div>
			</section>
		);
	}
}

export default Slideshow;
