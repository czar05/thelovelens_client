import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800">
      <div className="p-4">
        <nav className="space-y-2">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Home</Link>
          <Link to="/dashboard" className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Dashboard</Link>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar 