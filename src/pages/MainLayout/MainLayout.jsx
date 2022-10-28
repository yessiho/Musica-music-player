import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./MainLayout.css"

const MainLayout = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <div className="outlet">
                <Outlet />
            </div>
        </React.Fragment>
    )
}

export default MainLayout