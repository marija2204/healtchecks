import React from "react";
import './FirstPage.css';
import { Link } from "react-router-dom";
import FirstPageTitle from "./FirstPageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isAdmin = useSelector(state => state.auth.isAdmin);
  const history = useHistory();
  if(!isAuth && !isAdmin){
    history.push("/");
  }
  
    return (
         <div>
        <FirstPageTitle/>
         <main className='products'>
           <h1>My Products</h1>
            {isAuth
              ? (  <div>
                      <Link  className='btn' to="/test3" >TEST 3</Link> 
                   </div>
                )
              : (  <div>
                <Link  className='btn' to="/test1" >TEST 1</Link>
                <Link  className='btn' to="/test2" >TEST 2</Link>
                <Link  className='btn' to="/test3" >TEST 3</Link> 
                  </div>)}
         </main>
         </div>
      );
};

export default FirstPage;