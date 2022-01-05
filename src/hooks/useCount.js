import { useState } from "react";

const useCount = (initialVal = 0) => {
	const [state, setState] = useState(initialVal);
	const changeCount = (newVal) => {
		if (state > 0 || newVal > -1) {
			setState(state + newVal);
		}
	};
	const resetCount = () => {
		setState(0);
	};
	return [state, changeCount, resetCount];
};

export default useCount;
