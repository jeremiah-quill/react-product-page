import React from 'react';

const Slideshow = () => {
    return (
        <div className="slideshow">
        <img
            className="showcase-img"
            src="images/image-product-1.jpg"
            alt="large view of orange sneakers"
        />
        <div className="slideshow-buttons">
            <button className="previous">
                <img
                    src="images/icon-previous.svg"
                    alt="previous icon to navigate slideshow"
                />
            </button>

            <button className="next">
                <img
                    src="images/icon-next.svg"
                    alt="next icon to navigate slideshow"
                />
            </button>
        </div>
    </div>
    )
}

export default Slideshow;