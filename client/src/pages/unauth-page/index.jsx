import React from 'react'
import { Link } from 'react-router-dom'

const UnauthPage = () => {
  return (
    <h1>you don't have access to this page try to  <Link to={'/auth/login'} className='text-blue-600 underline font-semibold'> login </Link></h1>
  )
}

export default UnauthPage