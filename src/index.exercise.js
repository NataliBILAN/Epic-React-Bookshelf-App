// 🐨 you'll need to import react and createRoot from react-dom up here

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

import React, {useState} from 'react'
import ReactDom from 'react-dom'

import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'


function Form({onSubmit, buttonText}) {
    function handleSubmit(event) {
      event.preventDefault()
      const {username, password} = event.target.elements
  
      onSubmit({
        username: username.value,
        password: password.value,
      })
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <button type="submit">{buttonText}</button>
        </div>
      </form>
    )
}

function App() {
const [openModal, setOpenModal]= useState('none')

const handleLogin = (formData) => {
    console.log('login data', formData)
}

const handleRegister = (formData) => {
    console.log('registartion data', formData)
}
    return (
        <div>
            <Logo width="80" height="80" />
            <h1>Bookshelf</h1>
            <div>
                <button onClick={() => setOpenModal('login')}>Login</button>
            </div>
            <div>
                <button onClick={() => setOpenModal('register')}>Register</button>
            </div>
            <Dialog aria-label='Login form' isOpen={openModal === 'login'}>
                <button onClick={() => setOpenModal('none')}>Close</button>
                <h3>Log in</h3>
                <Form onSubmit={handleLogin} buttonText="Login" />
            </Dialog>

            <Dialog aria-label='Registration form' isOpen={openModal === 'register'}>
                <button onClick={() => setOpenModal('none')}>Close</button>
                <h3>Register</h3>
                <Form onSubmit={handleRegister} buttonText="Register" />

            </Dialog>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'))

