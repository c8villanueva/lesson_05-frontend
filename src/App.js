import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import useTitle from './hooks/useTtile'

function App() {
  useTitle('Dan D. Repairs')

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* everything else goes inside and the Layout will be the parent */}

        {/* public routes */}
        <Route index element={<Public />} /> {/* ^ this will be the default */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                {/* wraps around the other elements protected by this route */}

                <Route index element={<Welcome />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser /> } />
                    <Route path="new" element={<NewUserForm /> } />
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote /> } />
                  <Route path="new" element={<NewNote /> } />
                </Route>

              </Route> {/* End Dash */}
            </Route> {/* End Prefetch */}
          </Route>
        </Route> {/* End Protected Routes */}


      </Route>
    </Routes> 
  );
}

export default App;
