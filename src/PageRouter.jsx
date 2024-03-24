import App from './App'
import { HomePage } from './routes/HomePage'
import { LoginPage } from './routes/LoginPage'
import { DevelopersPage } from './routes/DevelopersPage'
import { SingleDevPage } from './routes/SingleDevPage'
import { UsersPage } from './routes/UsersPage'
import { RegisterUserPage } from './routes/RegisterUserPage'
import { ErrorPage } from './routes/ErrorPage'
import { Route, Routes } from 'react-router-dom'

const PageRouter = () => (
    <>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/devs' element={<DevelopersPage />}/>
                <Route path='/devs/:id' element={<SingleDevPage />}/>
                <Route path='/users' element={<UsersPage />}/>
                <Route path='/reg' element={<RegisterUserPage />}/>
            </Route>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </>
)
export default PageRouter
