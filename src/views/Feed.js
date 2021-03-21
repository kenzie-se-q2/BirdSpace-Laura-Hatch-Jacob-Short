import React, { useEffect, useState } from 'react';
// import FeedItem from '../views/FeedItem';
import FeedItem from '../views/FeedItem';
<<<<<<< Updated upstream
import { useStore } from '../store/store';
import BirdCard from '../components/BirdCard';


=======
>>>>>>> Stashed changes

const Feed = (props) => {

    return (
        <div className='feed'>
            
            {/* {photos.map(bird =>
                )} */}
                {/* this will be my birdPhotoRequest */}
                
                <BirdCard/>
        </div>
    )
}

export default Feed;

// will need to import state from the sign up page. 

