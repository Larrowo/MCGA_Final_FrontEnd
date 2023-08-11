import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/LogIn/index'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import { AuthGuard } from './guards/auth.guard'

function App () {
  return (
   <div className="app">
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.LOGIN} element={<Login/>} />
        <Route element={<AuthGuard />}>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
        </Route>
      </Routes>
     </Layout>
    </BrowserRouter>
   </div>
  )
}

export default App
