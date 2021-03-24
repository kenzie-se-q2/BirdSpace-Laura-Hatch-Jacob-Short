
import React, { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import BirdCard from '../components/BirdCard';
import { UrlUpload } from '../components/UrlUpload';

const Feed = (props) => {
    const user = useStore((state) => state.user)
    console.log(user)
    export const UrlUpload = (props) => {
        const {addPhoto} = useContext(PhotosContext)
        const [url, setUrl] = useState('');
    
        const handleChange = (e) =>
            setUrl(e.target.value);
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            addPhoto(url)
    
            setUrl('')
        }
    
    return (
        <div className='feed'>
            <div className = "laura-feed">
                < UrlUpload />              
                <BirdCard/>
            </div>
        </div>
    )
}
export default Feed;





//import React, { useEffect, useState } from 'react';
// import { useStore } from '../store/store';
// import BirdCard from '../components/BirdCard';
// import urlUpload from '../components/urlUpload';

// const Feed = (props) => {
//     const user = useStore((state) => state.user)
//     console.log(user)
//     return (
//         <>
//         <div className='feed'>
//             <urlUpload/>
//             <BirdCard/>
//         </div>
        
//         </>
//     )
// }
// export default Feed;