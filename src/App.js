import './App.css'

import Menu2 from "./components/Layout/Menu2";
import HealthChecksOverall from './components/HealthChecksOverall/HealthChecksOverall';
import Header from './components/Layout/Header';
import AvailableHealthChecksItems from './components/HealthChecksItem/AvailableHealhtChecksItems';

import { useState } from 'react';

function App() {
  const[timeOut, setTimeout] = useState(1);

  return (
    <div>
      <Header timeOut={timeOut} setTimeout={setTimeout}/>
      <HealthChecksOverall timeOut={timeOut}/>
      <Menu2/>
      <AvailableHealthChecksItems timeOut={timeOut}/>
    </div>
  );
}

export default App;