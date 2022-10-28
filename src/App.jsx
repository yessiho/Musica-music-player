import './App.css'
import Home from './pages/Home/Home'
import Error from './pages/Error'
import MainLayout from './pages/MainLayout/MainLayout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
