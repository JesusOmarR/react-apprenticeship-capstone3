import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Archies from '../Pages/Archives/Archives.page'
import MainPage from '../Pages/MainPage'
import Navbar from '../UI/Navbar'
import Private from '../Components/Private/Private.component'

import UserProvider from '../Providers/User/User.provider'
import NotesProvider from '../Providers/Notes/Notes.provider'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NotesProvider>
          <Navbar />
          <Switch>
            <Private exact path="/">
              <MainPage />
            </Private>
            <Private exact path="/archives">
              <Archies />
            </Private>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </NotesProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
