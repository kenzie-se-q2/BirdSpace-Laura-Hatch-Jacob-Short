import React, { useEffect, useState } from 'react';
import FeedItem from '../views/FeedItem';
const Feed = (props) => {
    const [photos, setPhotos] = useState([])
    const addPhoto = (url) => {
        setPhotos((prevState) => {
        const newPhoto = {
            url: url,
            likes: 0
        } 
        
        return prevState.concat(newPhoto)
    })
}
        useEffect(() => {
        fetch("https://api.jsonbin.io/b/600f8e05bca934583e41c665")
        .then(data  => data.json())
        .then((newData) => {
        setPhotos(newData.photos)
})
}, [])
    return (
        <div className='feed'>
            {photos.map(bird =>
                <FeedItem/>)}
        </div>
    )
}

export default Feed;

// will need to import state from the sign up page. 