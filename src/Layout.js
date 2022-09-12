// Overall layout of the application
// This is the main component that is rendered by the application
// It contains the header, the main content, and the footer
// Here goes the Outlet
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      hej
      <Outlet />
    </div>
  )
}

export default Layout
