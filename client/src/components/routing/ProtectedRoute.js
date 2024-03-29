import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import NavbarMenu from '../layout/NavbarMenu'

const ProtectedRoute = ({ children }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading) {
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    }

    return (
        <>
            <NavbarMenu />
            {isAuthenticated ? children : <Navigate to='/login' />}
        </>
    )
}

export default ProtectedRoute