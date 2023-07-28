import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const { signupemail,
    updateuser,
    login} = useContext(AuthContext) 


  const handleSubmit =(e)=>{
  e.preventDefault()
  }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left space-y-3">
    <h1 className='text-6xl font-bold text-[#1877F2]'>facebook</h1>
          <h3 className='text-3xl'>Facebook helps you connect and share with the people in your life.</h3>
    </div>
    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <input type="text" placeholder="email address or phone number" className="input input-bordered font-semibold" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="password" className="input input-bordered font-semibold my-2" />
        </div>
        <div className="form-control">
          <button type='submit' className="btn btn-secondary">Login</button>
        </div>
       <div>
        <h4 className='text-[#1877F2] text-center capitalize'>forget password</h4>
       </div>
       <div className="divider"></div>
       <div className="form-control text-center">
          <Link to='/signup'><button className="w-3/4 py-3 rounded-md mx-auto bg-[#42b72a] capitalize text-lg font-semibold text-white">create new account</button></Link>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default Login;