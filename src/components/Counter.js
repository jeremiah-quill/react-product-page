import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const handleCount = (value) => {
       if(value > 0 || count > 0) {
           setCount(count + value)
       }
	};
    // should I bring in the button which resets to this counter component, or figure out how to use resetCount outside of this component?
    // const resetCount = () => {
    //     setCount(0)
    // }

	return (
		<div className="quantity-picker">
			<button onClick={() => handleCount(-1)} className="minus">
				<img className="minus" src="images/icon-minus.svg" alt="minus icon" />
			</button>
			<div className="quantity">{count}</div>
			<button onClick={() => handleCount(1)} className="plus">
				<img className="plus" src="images/icon-plus.svg" alt="plus icon" />
			</button>
		</div>
	);
};

export default Counter;
