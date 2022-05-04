import { Fragment, useState } from 'react';
import HealthChecksOverall from '../components/HealthChecksOverall/HealthChecksOverall';
import AvailableHealthChecksItems from '../components/HealthChecksItem/AvailableHealhtChecksItems';
import HealthChecksMenu from '../components/Layout/HealthChecksMenu';
import Menu2 from '../components/Layout/Menu2';
import Header from '../components/Layout/Header';

const  Test3 = () => {
  const[timeOut, setTimeout] = useState(1);


  return (
   <Fragment>
     <Header timeOut={timeOut} setTimeout={setTimeout}/>
      <h1>Test 3</h1>
      <HealthChecksMenu/> 
      <HealthChecksOverall timeOut={timeOut}/>
      <Menu2/>
      <AvailableHealthChecksItems timeOut={timeOut}/> 
  </Fragment>
  );
}

export default Test3;