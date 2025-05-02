import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* everything else goes inside and the Layout will be the parent */}
        <Route index element={<Public />} /> {/* ^ this will be the default */}
        <Route path="login" element={<Login />} />

        {/* where the protected routes would begin */}
        <Route path="dash" element={<DashLayout />}>
          {/* wraps around the other elements protected by this route */}

          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route> {/* End Dash */}

      </Route>
    </Routes> 
  );
}

export default App;
