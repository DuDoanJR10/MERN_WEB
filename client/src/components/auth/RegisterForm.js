import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
    const { registerUser } = useContext(AuthContext)
    const [alert, setAlert] = useState(null)

    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    })

    const { username, password, confirmPassword } = registerForm

    const onChangeRegisterForm = e => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })

    const register = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setAlert({ type: 'danger', message: 'Password do not match' })
            return
        }

        try {
            const registerData = await registerUser(registerForm)
            if (!registerData.success) {
                setAlert({
                    type: 'danger',
                    message: registerData.message
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <Form className='my-4' onSubmit={register}>
            <AlertMessage info={alert} />
            <Form.Group>
                <Form.Control
                    value={username}
                    onChange={onChangeRegisterForm}
                    onFocus={() => setAlert(null)}
                    type='text'
                    placeholder='Username'
                    name='username'
                    required
                />
            </Form.Group>
            <Form.Group className='my-3'>
                <Form.Control
                    value={password}
                    onChange={onChangeRegisterForm}
                    type='password'
                    placeholder='Password'
                    name='password'
                    onFocus={() => setAlert(null)}
                    required
                />
            </Form.Group>
            <Form.Group className='my-3'>
                <Form.Control
                    value={confirmPassword}
                    onChange={onChangeRegisterForm}
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    onFocus={() => setAlert(null)}
                    required
                />
            </Form.Group>
            <Button variant='success' type='submit'>Register</Button>
        </Form>
        <p>Already have an account?
            <Link to="/login">
                <Button variant='info' size='sm' style={{ marginLeft: '10px' }}>Login</Button>
            </Link>
        </p>
    </>
}

export default RegisterForm