import React from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutHomePage = () => {
  return (
    <div>
        <nav>
            Nav
        </nav>
            <Outlet/>
    </div>
  )
}
