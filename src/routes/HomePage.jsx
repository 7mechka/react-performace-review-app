import { useDispatch, useSelector } from "react-redux"

const HomePage = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.userInfo.value)
    const addValue = () => {
        dispatch({type:'ADD_VALUE', payload: 1})
    }
    const removeValue = () => {
        dispatch({ type: 'REMOVE_VALUE', payload: 1 })
    }
    return (
        <div className="rounded-lg bg-catalina-blue-300">
            <h1 className="text-center text-3xl">Інформаційна сторінка</h1>
        </div>
    )}
export { HomePage }
