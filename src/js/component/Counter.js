import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [count, setCount] = useState(props.count);

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
