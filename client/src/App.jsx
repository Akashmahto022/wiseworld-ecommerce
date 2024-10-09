
import { Routes } from 'react-router-dom'
import './App.css'
import { Route } from 'lucide-react'
import AuthLayout from './components/auth/layout'

function App() {

  return (
    <div className=' flex flex-col overflow-hidden bg-white'>
      <h1>Header</h1>
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}>
          <Route path='/login'/>
          <Route path='/register'/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
