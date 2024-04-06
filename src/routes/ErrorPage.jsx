import { useNavigate } from 'react-router-dom'
import AppButton from '../components/forms/AppButton'

const ErrorPage = () => {
    const navigate = useNavigate()
    const goBack = () => navigate('/')
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <h1 className="text-9xl text-catalina-blue-500">404</h1>
            <p className="text-center text-6xl text-catalina-blue-500">
                PAGE NOT FOUND
            </p>
            <AppButton text={'BACK TO HOME'} onClick={goBack} type={'solid'} />
        </div>
    )
}
export { ErrorPage }
