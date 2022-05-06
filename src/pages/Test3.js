import { Fragment, useState } from 'react';
import HealthChecksOverall from '../components/HealthChecksOverall/HealthChecksOverall';
import AvailableHealthChecksItems from '../components/HealthChecksItem/AvailableHealhtChecksItems';
import HealthChecksMenu from '../components/Layout/HealthChecksMenu';
import Menu2 from '../components/Layout/Menu2';
import Header from '../components/Layout/Header';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const  Test3 = () => {
  const[timeOut, setTimeout] = useState(1);
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isAdmin = useSelector(state => state.auth.isAdmin);
  const history = useHistory();

  if(!isAuth && !isAdmin){
    history.push("/");
  }

  return (
   <Fragment>
     <Header timeOut={timeOut} setTimeout={setTimeout}/>
     <p>Test 3</p>
      <HealthChecksMenu/> 
      <HealthChecksOverall timeOut={timeOut}/>
      <Menu2/>
      <AvailableHealthChecksItems timeOut={timeOut}/> 
  </Fragment>
  );
}

export default Test3;