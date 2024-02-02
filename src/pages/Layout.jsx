import React from 'react'
import Sidebar from '../Component/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}
