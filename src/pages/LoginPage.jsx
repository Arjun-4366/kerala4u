import React, { Suspense,lazy, useState } from 'react'
import Login from '../components/Login'
// import { Suspense } from 'react'
// const Login = lazy(()=>import('../components/Login'))




function LoginPage() {
  
  return (
    <div>
      {/* <Suspense fallback={<p>Loading....</p>}> */}
      <Login />
      {/* </Suspense> */}
      
    
    </div>
  )
}

export default LoginPage
