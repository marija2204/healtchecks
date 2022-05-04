import './App.css'
import FirstPage from './components/FirstPage/FirstPage';
import Test1 from './pages/Test1';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {

  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <FirstPage/>
      </Route>
      <Route path="/test1">
        <Test1/>
      </Route>
      <Route path="/test2">
        <Test1/>
      </Route>
      <Route path="/test3">
        <Test1/>
      </Route>
      </Switch>

    </div>
  );
}

export default App;