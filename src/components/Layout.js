import { Outlet } from 'react-router-dom'

import React from 'react'

// a parent component
// good for if you have like a banner that will show on all pages
const Layout = () => {
  return  <Outlet />
}

export default Layout
