import './App.css'
import FirstPage from './components/FirstPage/FirstPage';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Auth from './components/FirstPage/Auth';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <Auth/>
      </Route>
      <Route path="/firstpage">
        <FirstPage />
      </Route>
      <Route path="/test1">
        <Test1/>
      </Route>
      <Route path="/test2">
        <Test2/>
      </Route>
      <Route path="/test3">
        <Test3/>
      </Route>
      </Switch>

    </div>
  );
}

export default App;