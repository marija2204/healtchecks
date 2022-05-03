import './App.css'
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import FirstPage from './components/FirstPage';
import HealthChecksMenu from './components/Layout/HealthChecksMenu';
import Menu2 from "./components/Layout/Menu2";
import HealthChecksOverall from './components/HealthChecksOverall/HealthChecksOverall';
import Header from './components/Layout/Header';
import AvailableHealthChecksItems from './components/HealthChecksItem/AvailableHealhtChecksItems';

 
function App() {
  const Select = useSelector( state => state.select.isSelected);
  const[timeOut, setTimeout] = useState(1);
  console.log('select',Select);

  return (
   <Fragment>
     <Header timeOut={timeOut} setTimeout={setTimeout}/>
    { !Select && <FirstPage/>}
    { Select && <div>
      <HealthChecksMenu/> 
      <HealthChecksOverall timeOut={timeOut}/>
      <Menu2/>
      <AvailableHealthChecksItems timeOut={timeOut}/> 
      </div>}
  </Fragment>
  );
}

export default App;