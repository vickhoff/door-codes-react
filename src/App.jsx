import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from "./components/pages/LandingPage/LandingPage"
import { AuthProvider } from "./context/AuthContext"
import { UserProvider } from "./context/UserContext"
import ProfilePage from "./components/pages/ProfilePage/ProfilePage"
import AuthenticationPage from "./components/auth/AuthenticationPage/AuthenticationPage"
import LoggedInLayout from "./components/layout/LoggedInLayout/LoggedInLayout"
import PrivateRoutes from "./components/auth/PrivateRoutes/PrivateRoutes"
import UserSettingsPage from "./components/pages/UserSettingsPage/UserSettingsPage"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<AuthenticationPage authType={"login"} />} />
          <Route path="signup" element={<AuthenticationPage authType={"signup"} />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<UserProvider><LoggedInLayout /></UserProvider>}>
              <Route path="me" element={<ProfilePage />} />
              <Route path="settings" element={<UserSettingsPage />} />
            </Route>
          </Route>  

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
