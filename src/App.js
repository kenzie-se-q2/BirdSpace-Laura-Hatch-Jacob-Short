import { Switch, Route } from "react-router-dom";
import { EyeBrow } from "./components/EyeBrow";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Registration from "./views/Registration";
import MessageList from "./components/MessageList";
import Settings from './views/Settings';
import Feed from './views/Feed';

function App() {
  return (
    <div className="App">
      <EyeBrow/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/messages' component={MessageList} />
        <Route path='/settings' component={Settings} />
        <Route path='/feed' component={Feed} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

