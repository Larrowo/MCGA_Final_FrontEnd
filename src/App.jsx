import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/LogIn/index'

function App () {
  return (
   <div className="app">
    <h1>Hello world</h1>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<>NOT FOUND</>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Layout>
    </BrowserRouter>
   </div>
  )
}

export default App
