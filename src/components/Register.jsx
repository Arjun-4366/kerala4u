import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register({toggleLoginForm}) {
    const navigate = useNavigate()
  return (
    <>
<div>
  <a href="" onClick={() => navigate("/")}>
            <p className="text-green-600  text-4xl font-sans font-extrabold italic font-custom ">
              Ker<span className="text-green-700">ala</span>
              <span className="text-green-800">4U</span>{" "}
            </p>
          </a>

  </div>

<div className="d-flex items-center justify-center w-1/3">
      <div className="bg-transparent backdrop-brightness-100  backdrop-filter d-flex justify-center items-center px-7 py-4 rounded  w-full">
        <p className="text-xl text-black text-center">Register here..!</p>
        <div className="mt-4">
          <label className="block text-black text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 outline"
            type="email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-black text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 outline"
            type="email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-black text-sm font-bold mb-2">
            Contact No
          </label>
          <input
            className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 outline"
            type="email"
            required
          />
        </div>
        <div className="mt-4 flex flex-col justify-between">
          <div className="flex justify-between">
            <label className="block text-black text-sm font-bold mb-2">
              Password
            </label>
          </div>
          <input
            className="text-black border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 outline"
            type="password"
          />
        </div>
        <a
          href="#"
          className=" flex items-center justify-center mt-4 text-black font-bold rounded-lg shadow-md hover:bg-green-800 hover:text-white outline">
          <div className="flex px-5 justify-center w-full py-3">
            Register
          </div>
        </a>
    
      </div>
    </div>
    <div className="mt-4 flex items-center w-full text-center mb-2">
          <a
            href="#"
            className="text-lg text-white capitalize text-center w-full  ">
            Already have an account?
            <span className="text-white  hover:text-black ms-3 border-2  px-4 py-2 w-full hover:bg-green-800 outline outline-1 outline-white rounded-full" onClick={toggleLoginForm}>Log In</span>
          </a>
        </div>
</>
  )
}

export default Register
