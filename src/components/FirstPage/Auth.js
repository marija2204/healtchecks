 import './Auth.css';
 import {GoHeart} from "react-icons/go"; 
 import { useDispatch } from 'react-redux';
 import { authActions } from '../../store/auth';

 const Auth = () => {
    const dispatch = useDispatch();
    const loginHandler = (event) => {
      event.preventDefault();
      dispatch(authActions.login());
    };
    return (
        <main className='auth'>
          <div><h1><GoHeart/> Health Checks status</h1></div>
          <section>
            <form onSubmit={loginHandler}>
              <div className='control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className='control'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button className='btn'>Login</button>
            </form>
          </section>
        </main>
      );
    };


 export  default Auth;