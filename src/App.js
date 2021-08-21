import MineSiteInput from './components/MineSiteInput';
import MineSiteOverview from './components/MineSiteOverview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/overview">
            <MineSiteOverview />
          </Route>
          <Route path="/">
            <MineSiteInput />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
