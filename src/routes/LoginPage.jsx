import { useNavigate } from 'react-router-dom'
import AuthProvider from '../components/common/AuthProvider'
import AppButton from '../components/forms/AppButton'
import AppInput from '../components/forms/AppInput'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../main'
import { useState } from 'react'

const LoginPage = () => {
        let [userEmail, SetUserEmail] = useState('')
        let [userPass, SetUserPass] = useState('')
        const navigate = useNavigate()
        const loginWithEmail = () => {
            event.preventDefault()
            signInWithEmailAndPassword(auth, userEmail, userPass)
             .catch((e) => {alert(e)})
        }
    return (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-catalina-blue-300 p-6">
            <form
                onSubmit={() => {
                    event.preventDefault()
                    loginWithEmail()
                }}
                className="flex flex-col items-center justify-center gap-5"
            >
                <AppInput
                    name={'email'}
                    placeholder={'Email'}
                    onInput={() => {
                        SetUserEmail((userEmail = event.target.value))
                    }}
                />
                <AppInput
                    name={'password'}
                    type={'password'}
                    placeholder={'Password'}
                    onInput={() => {
                        SetUserPass((userPass = event.target.value))
                    }}
                />
                <div className="flex gap-4">
                    <AppButton
                        text={'Login'}
                        type={'solid'}
                        onSubmit={loginWithEmail}
                    />
                    <AppButton
                        text={'Register'}
                        type={'solid'}
                        onClick={() => {
                            navigate('/reg')
                        }}
                    />
                </div>
            </form>
            <h2 className="text-center text-2xl">Or:</h2>
            <AuthProvider />
        </div>
    )
}
export { LoginPage }
