import React from "react";
import classes from './FirstPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectActions } from '../store/select';

const FirstPage = () => {
  const Select = useSelector( state => state.select.isSelected)
  const dispatch = useDispatch();
  
  const isSelectedHandler = () => {
      dispatch(selectActions.isSelected());
      console.log('test1',Select);
  };
    return (
        <main className={classes.products}>
          <h1>My Products</h1>
          <div>
            <button onClick={isSelectedHandler}>TEST1</button>
            <button onClick={isSelectedHandler}>TEST 2</button>
            <button onClick={isSelectedHandler}>TEST 3</button>
          </div>
        </main>
      );
};

export default FirstPage;