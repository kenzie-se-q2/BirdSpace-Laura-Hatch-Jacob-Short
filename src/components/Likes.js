import React, { useState } from 'react';


export default function Likes() {
    const [ likesCount, setLikesCount ] = useState(0)

    function decrement() {
        setLikesCount(prevCount => prevCount - 1)
    }

    function increment() {
        setLikesCount(prevCount => prevCount + 1)
    }

    return (
        <div className='likes'>
            <span>{likesCount}</span>
                <button onClick= {decrement}>Unlike</button>
                <button onClick= {increment}>Like</button>
        </div>
    )
}
