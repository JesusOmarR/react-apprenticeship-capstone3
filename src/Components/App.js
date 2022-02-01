import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const MainPage = React.lazy(() => import('../Pages/MainPage'))
const NotFound = React.lazy(() => import('../Pages/NotFound'))
const Login = React.lazy(() => import('../Pages/Login'))
const Archives = React.lazy(() => import('../Pages/Archives/Archives.page'))
import Navbar from '../UI/Navbar/Navbar'
import Private from './Private/Private.component'
import NotesProvider from '../Providers/Notes/Notes.provider'
import UserProvider from '../Providers/User/User.provider'
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NotesProvider>
          <Navbar />
          <Switch>
            <Private exact path="/">
              <React.Suspense fallback={<div>...loading</div>}>
                <MainPage />
              </React.Suspense>
            </Private>

            <Private exact path="/archives">
              <React.Suspense fallback={<div>...loading</div>}>
                <Archives />
              </React.Suspense>
            </Private>
            <Route exact path="/login">
              <React.Suspense fallback={<div>...loading</div>}>
                <Login />
              </React.Suspense>
            </Route>
            <Route path="*">
              <React.Suspense fallback={<div>...loading</div>}>
                <NotFound />
              </React.Suspense>
            </Route>
          </Switch>
        </NotesProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
