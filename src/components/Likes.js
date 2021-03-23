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
			<div className="card laura-card">
				<div className="card-body">
					 <div className="likesCount d-flex justify-content-between" value={likesCount}>
						<button
							style={{
								opacity: 1,
							}}
							className="unHappyClicks"
							onClick={decrement}
						>
							Unlike
						</button>
						<span className="laura-counter">{likesCount}</span> 
						<button
							style={{
								opacity: 1,
							}}
							className="happyClick"
							onClick={increment}
						>
							Like
						</button>
					</div>
				</div>
			</div>
	 </div>
	);
}
