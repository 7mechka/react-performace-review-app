import { useContext } from 'react'
import AppButton from '../forms/AppButton'
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { Context } from '../../main'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const AuthProvider = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    const GoogleProvider = new GoogleAuthProvider()
    const GitProvider = new GithubAuthProvider()
    const navigate = useNavigate()

    const startLogin = async (type) => {
        if (type === 'google') {
            await signInWithPopup(auth, GoogleProvider).catch((e) => alert(e))
        } else if (type === 'git') {
            await signInWithPopup(auth, GitProvider).catch((e) => alert(e))
        }
    }

    return (
        <>
            {user != null ? navigate('/') : (
                <div className="flex items-center justify-center">
                    <div className="flex h-auto w-auto flex-col items-center justify-center gap-10 rounded-xl bg-catalina-blue-300 p-10">
                        <AppButton
                            onClick={() => startLogin('google')}
                            text={'Login with Google'}
                            type={'solid'}
                        />
                        <AppButton
                            onClick={() => startLogin('git')}
                            text={'Login with GitHub'}
                            type={'solid'}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default AuthProvider
