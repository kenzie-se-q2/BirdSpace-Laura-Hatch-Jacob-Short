import React, { useEffect, useState } from 'react';
import FeedItem from '../views/FeedItem';
<<<<<<< Updated upstream
import { useStore } from '../store/store';

=======
>>>>>>> Stashed changes

const Feed = (props) => {

    return (
        <div className='feed'>
            <h1>Welcome {} , lets checkout the recent posts</h1>
            {/* {photos.map(bird =>
                )} */}
                {/* this will be my birdPhotoRequest */}
                <FeedItem/>
        </div>
    )
}

export default Feed;

// will need to import state from the sign up page. 