import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute';
import NotPage from './views/NotPage';
import About from './views/About';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Auth authRouter='login' />} />
          <Route path='/register' element={<Auth authRouter='register' />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/about'
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path='/*' element={<NotPage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}

export default App;
