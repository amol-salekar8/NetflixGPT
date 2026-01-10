import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignIn, setIsSignIn] = useState(true);
  const toggelSignInForm =() =>{
      setIsSignIn(!isSignIn);
  }

  return (

    <div>
      
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg" alt="backgroundImg" />
      </div>
      <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0  bg-black bg-opacity-75 text-white rounded-xl'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignIn &&
            <input 
            type='text' 
            placeholder=' Full Name ' 
            className='py-4 m-2 w-full bg-gray-700 '/>
        }
        <input type='text' placeholder=' Email address' className='py-4 m-2 w-full bg-gray-700'/>
        <input type='password' placeholder=' Password' className='py-4 m-2 w-full bg-gray-700'/>
        <button className='py-6 m-2 bg-red-700 w-full'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 m-2 cursor-pointer ' onClick={toggelSignInForm}>{isSignIn ? 'New to Netflix ? Sign up now' : 'Already have account ? Sign In now'}</p>
      </form>
    </div>
    
  )
}

export default Login