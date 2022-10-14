
import { Routes, Route } from 'react-router-dom'
import { Admin } from '../pages/admin/Admin'
import { LogIn } from '../pages/login/LogIn'

export const Router = () => {
  return (
    <Routes>

        <Route path='login' element={ <LogIn /> } />

        <Route path='admin' element={ <Admin /> } />

        <Route path='/*' element={ <Admin /> } />

    </Routes>
  )
}
