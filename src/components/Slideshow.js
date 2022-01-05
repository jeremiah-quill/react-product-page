import { useState } from "react";

const Slideshow = (props) => {
	const { slideshowImages } = props;

	const [currentSlideshowImage, setCurrentSlideshowImage] = useState(0);

	const nextImg = () => {
		if (currentSlideshowImage === slideshowImages.length - 1) {
			setCurrentSlideshowImage(0);
		} else {
			setCurrentSlideshowImage(currentSlideshowImage + 1);
		}
	};

	const previousImg = () => {
		if (currentSlideshowImage === 0) {
			setCurrentSlideshowImage(slideshowImages.length - 1);
		} else {
			setCurrentSlideshowImage(currentSlideshowImage - 1);
		}
	};

	return (
		<div className="slideshow">
			<img
				className="showcase-img"
				src={slideshowImages[currentSlideshowImage]}
				alt="large view of orange sneakers"
			/>
			<div className="slideshow-buttons">
				<button onClick={nextImg} className="previous">
					<img
						src="images/icon-previous.svg"
						alt="previous icon to navigate slideshow"
					/>
				</button>

				<button onClick={previousImg} className="next">
					<img
						src="images/icon-next.svg"
						alt="next icon to navigate slideshow"
					/>
				</button>
			</div>
		</div>
	);
};

export default Slideshow;
