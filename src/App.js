import { Switch, Route } from "react-router-dom";
import { useStore } from './store/store';
import { EyeBrow } from "./components/EyeBrow";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Registration from "./views/Registration";
import MessageList from "./components/MessageList";
import Settings from './views/Settings';
import Feed from './views/Feed';
import Profile from './views/Profile'
import BirdCard from "./components/BirdCard";
import { searchUser } from "./components/searchUser";


import React, {createContext, useState, useEffect} from 'react';
//import  from './components/Header.js';
//import HomePage from './pages/HomePage.js';
import { UrlUpload } from "./components/urlUpload";

export const PhotosContext = createContext()


  function App() {
  const user = useStore((state) => state.user)
    const [photos, setPhotos] = useState([])
    const addPhoto = (url) => {
        setPhotos((prevState) => {
            const newPhoto = {
                url: url,
                likes: 0
            }
            return prevState.splice(0, 0, newPhoto)
           
        })
    }

    const url = " 'https://api.ebird.org/v2/data/obs/{{regionCode}}/recent";
fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "38hl3jc5kjru"
  }
})

    useEffect(() => {
        fetch('https://api.ebird.org/v2/data/obs/{{regionCode}}/recent')
            .then(response => response.json())
            .then((data) => {
                setPhotos(data.photos)
            })
    }, [])

  return (
    <div className="App">
        <PhotosContext.Provider value={{photos, addPhoto}} >
            <div>
                <UrlUpload />
                {/* <HomePage /> */}
            </div>
        </PhotosContext.Provider>
      <EyeBrow/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/messages' component={MessageList} />
        <Route path='/settings' component={Settings} />
        <Route path='/feed' component={Feed} />
        <Route path='/profile' component={Profile} />
        <Route path='./BirdCard' component={BirdCard}/>
        <Route path='/searchUser' component={searchUser}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
