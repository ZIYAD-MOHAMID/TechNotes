import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Public from "./components/Public.js";
import Login from "./features/auth/Login.js";
import Register from "./features/auth/Register.js";
import DashLayout from "./components/DashLayout.js";
import Welcome from "./features/auth/Welcome.js";
import NotesList from "./features/notes/NotesList.js";
import UsersList from "./features/users/UsersList.js";
import NewUserForm from "./features/users/NewUserForm.js";
import NewNote from "./features/notes/NewNote.js";
import EditNote from "./features/notes/EditNote.js";
import EditUser from "./features/users/EditUser.js";
import Prefetch from "./features/auth/Prefetch.js";
import PersistLogin from "./features/auth/PersistLogin.js";
import RequireAuth from "./features/auth/RequireAuth.js";
import { ROLES } from "./config/roles.js";
import useTitle from "./hooks/useTitle.js";

function App() {
  useTitle("Ziad M. Repire");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>

                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />
                  }
                >
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
