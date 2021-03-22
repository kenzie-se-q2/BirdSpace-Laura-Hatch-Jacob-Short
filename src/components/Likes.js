import React, { useState } from 'react';

export default function Likes() {
	const [ likesCount, setLikesCount ] = useState(0);

	function decrement() {
		setLikesCount((prevCount) => (prevCount - 1 < 0 ? prevCount : prevCount - 1));
        
	}

	function increment() {
		setLikesCount((prevCount) => prevCount + 1);
	}

	return (
		<div className="likes">
			<div class="card">
				<div class="card-body">
                    {/* {prevCount} */}
			<span>{likesCount}</span>
					<button className="inlineUnLikes" onClick={decrement}>
						Unlike
					</button>
					<button className="inlineLikes" onClick={increment}>
						Like
					</button>
				</div>
			</div>
		</div>
	);
}
