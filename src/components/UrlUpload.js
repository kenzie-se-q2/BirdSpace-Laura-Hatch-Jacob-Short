
import React from 'react';

import React, {useContext, useState} from 'react';
import {PhotosContext} from '../App.js';


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
        <>
        
        <form className="ImageUploaderForm">
                <input
                    placeholder="Add URL here"
                    value={url}
                    onChange={handleChange} />
            </form>
        <div className= "container"> 
        <div className= "laura-url" >    
                <div class="input-group mb-5">
                        <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Upload your favorite bird URL</span>
                <button className="SubmitButton" onClick={handleSubmit} >
                    Submit
                </button>
                </div>
                <input type="text" class="form-control" aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                placeholder="Add URL here"
                value={url}
                onChange={handleChange} />
                Submit
                <button className="SubmitButton" onClick={handleSubmit} >
            </button>/> 
                </div>       
            </div>  
        </div>
     </>
    )
}





        {/* <div class="input-group input-group-lg">
        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">URL</span>
        </div>
        <input type="text" class="form-control" aria-label="Large" 
        aria-describedby="inputGroup-sizing-sm" />
       </div> */}