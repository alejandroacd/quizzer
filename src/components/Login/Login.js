import React, { useState, useRef } from 'react';
import './Login.css'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


const Login = () => {



  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    }
    catch {
      setError('failed to login')
    }

    setLoading(false);
  }

  return (
    <div className="card2 w-75 d-flex">
      <h1 className="text-center ">Login</h1>
       { error ? <div class="alert alert-danger m-0 p-3" role="alert">
        {error}
       </div> : null}
      <form method="POST" action="/login">
        <label >e-mail</label>
        <br />
        <input placeholder='Escribe tu e-mail...' ref={emailRef} type='email' required />
        <label className="mt-4">Password</label>
        <br />
        <input placeholder='Tu contraseña...' ref={passwordRef} type='password' required />
        
        <button className="btn btn-outline-info mt-4 w-100" onClick={handleSubmit} type="button" disabled={loading}>Login</button>
        <div className="mt-3">Need an account? <Link to="/Signup">Sign up</Link></div>
      </form>
      <div id="auth-widget">

      </div>
    </div>
  )
}
export default Login