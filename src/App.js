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


function App() {
  const user = useStore((state) => state.user)
  return (
    <div className="App">
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
