import { NavLink, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/journal">Journal</NavLink></li>
          <li><NavLink to="/watchlist">Watchlist</NavLink></li>
          <li><NavLink to="/compare">Compare</NavLink></li>
          <li><NavLink to="/insights">Insights</NavLink></li>
          <li><NavLink to="/discover">Discover</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout