import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../../main'
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const AppHeader = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    return (
        <>
            <div className="flex h-[64px] w-full items-center justify-between bg-catalina-blue-300 px-6">
                <div className="flex gap-3">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/users">UsersList</NavLink>
                    <NavLink to="/devs">DevsList</NavLink>
                    <NavLink to="/reg">AddUser</NavLink>
                </div>
                {user ? (
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => {
                                auth.signOut()
                            }}
                        >
                            Exit
                        </button>
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="h-8 w-8 rounded-full"
                        />
                    </div>
                ) : (
                    <Link to="/login" className="relative">
                        Login
                    </Link>
                )}
            </div>
        </>
    )
}
export { AppHeader }
