import { Outlet } from "react-router-dom"
import { AppHeader } from "./components/common/AppHeader"
import { AppFooter } from "./components/common/AppFooter"

const App = () => (
    <>
        <AppHeader/>
        <Outlet/>
        <AppFooter/>
    </>
)

export default App
