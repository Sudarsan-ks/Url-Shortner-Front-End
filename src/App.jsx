import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/Home"
import { Dashboard } from "./components/Dashboard"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { ShortUrl } from "./components/ShorterUrl"
import { Forgot } from "./components/Forgot"
import { Reset } from "./components/Reset"
import { Activate } from './components/Activate'
import { Error } from './components/Error'
import { UrlRedirect } from './components/UrlRedirect'
import { ProtectedRoute } from './components/ProtectedRouter'

function App() {

  return (
    <div className="urlShortner">
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute component={Dashboard} />} />
        <Route path='/home' element={<ProtectedRoute component={Home} />} />
        <Route path='/shorturl' element={<ProtectedRoute component={ShortUrl} />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetPassword/:token' element={<Reset />} />
        <Route path='/activate/:token' element={<Activate />} />
        <Route path='/redirect/:shortUrl' element={<UrlRedirect />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
