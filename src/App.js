import { Switch, Route } from "react-router-dom";
import { EyeBrow } from "./components/EyeBrow";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Registration from "./views/Registration";
import MessageList from "./components/MessageList";
import Settings from './views/Settings';

function App() {
  return (
    <div className="App">
      <EyeBrow/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/messages' component={MessageList} />
        <Route path='/settings' component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

