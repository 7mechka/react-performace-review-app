import AppButton from '../forms/AppButton'
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { auth } from '../../main'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const AuthProvider = () => {
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
                    <div className="flex h-auto w-auto flex-col items-center justify-center gap-5">
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
