import { useSelector } from 'react-redux'

const AppFooter = () => {
    const loadingStatus = useSelector((state) => state.userInfo.isLoading)
    return (
        <>
            {!loadingStatus && <div className=" h-8 w-full bg-catalina-blue-300"></div>}
        </>
    )
}
export { AppFooter }
