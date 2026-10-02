import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Watchlist from './pages/Watchlist'
import Compare from './pages/Compare'
import Insights from './pages/Insights'
import Discover from './pages/Discover'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="journal" element={<Journal />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="compare" element={<Compare />} />
        <Route path="insights" element={<Insights />} />
        <Route path="discover" element={<Discover />} />
      </Route>
    </Routes>
  )
}

export default App
