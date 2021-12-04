import './App.css';
import { Switch, Route } from "react-router-dom"
import Dashboard from './screens/Dashboard/Dashboard';
import Playercreation from './screens/PlayerCreation';
import Stats from './screens/Stats/Stats';
import Training from './screens/Training/Training';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/stats">
          <Stats></Stats>
        </Route>
        <Route path="/training">
          <Training></Training>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
