import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = props => {
    const [count, setCount] = useState(props.count);
    
useEffect(() => {
    console.log('useEffect ran');
    document.title = count;
});
// if you use regular functions here is what youwould do without hooks
    // this line would be :
    // const stateArr = useState(props.count);
    // const count = stateArr[0];
    // const setCount = stateArr[1];

    // const handleSubtract = () => {
    //     setCount(count-1);
    // };

    // <button onClick={handleSubtract}>-1</button> &nbsp;

	return (
		<div>
			<p>The current count is {count}</p>
			<button onClick={() => setCount(count - 1)}>-1</button> &nbsp;
			<button onClick={() => setCount(props.count)}>reset</button> &nbsp;
			<button onClick={() => setCount(count + 1)}>+1</button> &nbsp;
		</div>
	);
};

Counter.propTypes = {
	count: PropTypes.integer
};

Counter.defaultProps = {
	count: 0
};

export { Counter as default };
