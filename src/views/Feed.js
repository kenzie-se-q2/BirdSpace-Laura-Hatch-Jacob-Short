import React, { useEffect, useState } from 'react';
import FeedItem from '../views/FeedItem';
import { useStore } from '../store/store';
import BirdCard from '../components/BirdCard';



const Feed = (props) => {

    return (
        <div className='feed'>
            <h1>Welcome {} , lets checkout the recent posts</h1>
            {/* {photos.map(bird =>
                )} */}
                {/* this will be my birdPhotoRequest */}
                <FeedItem/>
                <BirdCard />
        </div>
    )
}

export default Feed;

// will need to import state from the sign up page. 

