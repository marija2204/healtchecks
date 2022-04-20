import './App.css'

import Menu2 from "./components/Layout/Menu2";
import HealthChecksOverall from './components/HealthChecksOverall/HealthChecksOverall';
import Header from './components/Layout/Header';
import AvailableHealthChecksItems from './components/HealthChecksItem/AvailableHealhtChecksItems';

function App() {
  return (
    <div>
      <Header/>
      <HealthChecksOverall/>
      <Menu2/>
      <AvailableHealthChecksItems/>
    </div>
  );
}

export default App;