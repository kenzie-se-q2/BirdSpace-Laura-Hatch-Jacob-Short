import React, { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import BirdCard from '../components/BirdCard';

const Feed = (props) => {
    const user = useStore((state) => state.user)
    console.log(user)
    return (
        <div className='feed'>
                <BirdCard/>
        </div>
    )
}

export default Feed;


