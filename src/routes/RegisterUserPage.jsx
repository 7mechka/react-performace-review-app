import AppInput from '../components/forms/AppInput'
import AppButton from '../components/forms/AppButton'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../main'
import { useState } from 'react'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const RegisterUserPage = () => {
    const navigate = useNavigate()
    const regUser = () => {
        createUserWithEmailAndPassword(auth, userEmail, userPass)
         .then((userData) => {
            document.forms[0].reset()
            SetUserEmail(userEmail = '')
            SetUserPass(userPass = '')
            setDoc(doc(db, 'users', userData.user.uid), {
                email: userData.user.email,
                id: userData.user.uid
            })
             .then(() => {
                navigate(`/devs/${userData.user.uid}`)
             })
             .catch((e) => {alert(e)})
        })
         .catch((e) => {alert(e)})
    }
    let [userEmail, SetUserEmail] = useState('')
    let [userPass, SetUserPass] = useState('')
    return (
        <form onSubmit={() => {
            event.preventDefault()
            regUser()
            }} className="flex w-80 flex-col items-center justify-center gap-7 rounded-lg bg-catalina-blue-300 p-5">
            <h1 className="text-center text-3xl">RegisterUserPage</h1>
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
            <AppButton type={'solid'} text={'Submit'} onClick={regUser} />
        </form>
    )}
export { RegisterUserPage }
