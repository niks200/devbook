import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li> <Link to="/admin" className="nav-link">Users</Link></li>
        <li> <Link to="/admin/postlist" className="nav-link">Posts</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar