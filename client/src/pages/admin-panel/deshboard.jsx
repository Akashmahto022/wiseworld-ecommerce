import React from 'react'
import { Link } from 'react-router-dom'

const AdminDeshboard = () => {
  return (
    <div>deshboard
      <Link to={'/admin/features'}>features</Link>
      <Link to={'/admin/products'}>products</Link>
      <Link to={'/admin/orders'}>orders</Link>
    </div>
  )
}

export default AdminDeshboard