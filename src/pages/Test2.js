import { Fragment, useState } from 'react';
import HealthChecksOverall from '../components/HealthChecksOverall/HealthChecksOverall';
import AvailableHealthChecksItems from '../components/HealthChecksItem/AvailableHealhtChecksItems';
import HealthChecksMenu from '../components/Layout/HealthChecksMenu';
import Menu2 from '../components/Layout/Menu2';

const  Test2 = () => {
  const[timeOut, setTimeout] = useState(1);


  return (
   <Fragment>
      <HealthChecksMenu/> 
      <HealthChecksOverall timeOut={timeOut}/>
      <Menu2/>
      <AvailableHealthChecksItems timeOut={timeOut}/> 
  </Fragment>
  );
}

export default Test2;