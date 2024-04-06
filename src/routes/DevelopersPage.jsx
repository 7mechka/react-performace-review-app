import { Link } from 'react-router-dom'
import { db } from '../main'
import { useEffect, useState } from 'react'
import { getDocs, query, collection } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import { SET_LOADING } from '../state/userInfo/userInfo.actions'

const DevelopersPage = () => {
    const dispatch = useDispatch()
    const loadingStatus = useSelector((state) => state.userInfo.isLoading)
    let [devs, setDevs] = useState([])
    const getDevs = () => {
        dispatch(SET_LOADING(true))
        getDocs(query(collection(db, 'users')))
            .then((res) => {
                let temp = []
                res.docs.map((user) => {
                    temp.push(user.data())
                })
                return temp
            })
            .then((res) => {
                setDevs((devs = res))
            })
            .catch((e) => {
                alert(e)
            })
            .finally(() => {
                dispatch(SET_LOADING(false))
            })
    }
    useEffect(() => {
        getDevs()
    }, [])
    return (
        <>
            {!loadingStatus ? (
                <div className="bg-catalina-blue-300">
                    <h1 className="text-center text-3xl">
                        DevelopersPageDevelopersPage
                    </h1>
                    <div className="table">
                        <div className="table__row grid grid-cols-7">
                            <div className="table__sell">Name</div>
                            <div className="table__sell">Email</div>
                            <div className="table__sell">Role</div>
                            <div className="table__sell">Prev Review</div>
                            <div className="table__sell">Next Review</div>
                            <div className="table__sell">Tech Stack</div>
                            <div className="table__sell">{`User page ->`}</div>
                        </div>
                        {devs &&
                            devs.map((item) => (
                                <div
                                    className="table__row grid grid-cols-7"
                                    key={item.id}
                                >
                                    <div className="table__sell">
                                        {item?.name || 'N/A'}
                                    </div>
                                    <div className="table__sell">
                                        {item?.email || 'N/A'}
                                    </div>
                                    <div className="table__sell">
                                        {item?.role || 'N/A'}
                                    </div>
                                    <div className="table__sell">
                                        {item?.lastReview || 'N/A'}
                                    </div>
                                    <div className="table__sell">
                                        {item?.nextReview || 'N/A'}
                                    </div>
                                    <ul className="table__sell text-xs">
                                        {item.stack ? (
                                            <>
                                                {item?.stack.map((item) => (
                                                    <li key={item}>{item}</li>
                                                )) || 'N/A'}
                                            </>
                                        ) : (
                                            <>{'N/A'}</>
                                        )}
                                    </ul>
                                    <div className="table__sell">
                                        <Link to={`/devs/${item.id}`}>
                                            Go to user
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}
export { DevelopersPage }
