import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext)
    const [alert, setAlert] = useState(null)

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const { username, password } = loginForm

    const onChangeLoginForm = e => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success) {

            } else {
                setAlert({
                    type: 'danger',
                    message: loginData.message
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form className='my-4' onSubmit={login}>
                <AlertMessage info={alert}></AlertMessage>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        value={username}
                        onChange={onChangeLoginForm}
                        onFocus={() => setAlert(null)}
                    />
                </Form.Group>
                <Form.Group className='my-3'>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={onChangeLoginForm}
                        onFocus={() => setAlert(null)}
                    />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
            </Form>
            <p>Don't have an account?
                <Link to="/register">
                    <Button variant='info' size='sm' style={{ marginLeft: '10px' }}>Register</Button>
                </Link>
            </p>
        </>
    )
}

export default LoginForm