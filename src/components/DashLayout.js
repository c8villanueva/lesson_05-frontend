// dashboard once someone logs in
import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

import React from 'react'

const DashLayout = () => {
  return (
    <>
      {/* DashHeader being on top of the parent(?) will now have it on every page of the site*/}
      <DashHeader />
      {/* placing this in a div allows to add styles ? */}
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  )
}

export default DashLayout
