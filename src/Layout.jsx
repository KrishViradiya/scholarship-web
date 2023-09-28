import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Components/index'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout
