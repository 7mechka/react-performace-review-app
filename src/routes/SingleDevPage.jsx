import { useNavigate, useParams } from 'react-router-dom'
import { auth, db } from '../main'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import { SET_LOADING } from '../state/userInfo/userInfo.actions'
import AppButton from '../components/forms/AppButton'
import DevEdit from '../components/common/DevEdit'

const SingleDevPage = () => {
    let [userData, SetUserData] = useState('')
    let [user, setUser] = useState('')
    let [permission, SetPermission] = useState('')
    let [isEditing, SetIsEditing] = useState(false)
    const dispatch = useDispatch()
    const loadingStatus = useSelector((state) => state.userInfo.isLoading)
    const params = useParams()
    const getData = () => {
        getDoc(doc(db, 'users', params.id)).then((res) => {
            SetUserData((userData = res.data()))
            dispatch(SET_LOADING(false))
        })
        user === null
            ? ''
            : getDoc(doc(db, 'users', user.uid)).then((res) => {
                  const tmp = res.data()
                  SetPermission((permission = tmp.permission))
              })
    }
    const checkAuthState = async () => {
        dispatch(SET_LOADING(true))
        const currentUser = auth.currentUser
        if (currentUser) {
            setUser((user = currentUser))
        } else {
            setUser((user = null))
        }
    }
    useEffect(() => {
        checkAuthState()
        getData()
    }, [])
    const editModal = () => {
        SetIsEditing((isEditing = !isEditing))
    }
    return (
        <>
            {!loadingStatus ? (
                <>
                    {!isEditing && (
                        <div className="rounded-lg bg-catalina-blue-300 p-2">
                            <h1 className="text-center text-3xl">
                                SingleDevPage {params.id}
                            </h1>
                            <ul>
                                <li className="text-center text-3xl">
                                    Email: {userData.email}
                                </li>
                                <li className="text-center text-3xl">
                                    Name: {userData?.name || 'N/A'}
                                </li>
                                <li className="text-center text-3xl">
                                    Last Preview:{' '}
                                    {userData?.lastReview || 'N/A'}
                                </li>
                                <li className="text-center text-3xl">
                                    Next Preview:{' '}
                                    {userData?.nextReview || 'N/A'}
                                </li>
                                <li className="text-center text-3xl">
                                    Role: {userData?.role || 'N/A'}
                                </li>
                                <ul className="text-center text-3xl">
                                    Stack:
                                    {userData.stack ? (
                                        <>
                                            {userData.stack.map((item) => (
                                                <li
                                                    className="text-center text-2xl"
                                                    key={item + item}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </>
                                    ) : (
                                        <> {'N/A'}</>
                                    )}
                                </ul>
                            </ul>
                            <div>
                                {(permission > 0 ||
                                    user?.uid === params.id) && (
                                    <AppButton
                                        text={'Edit'}
                                        type={'solid'}
                                        onClick={editModal}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                    {isEditing && (
                        <>
                            <DevEdit
                                userData={userData}
                                params={params}
                                cb={() => {
                                    editModal()
                                    getData()
                                }}
                            />
                        </>
                    )}
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}
export { SingleDevPage }
