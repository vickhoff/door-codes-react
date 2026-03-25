import { BrowserRouter, Routes, Route } from "react-router"
import LandingPage from "./assets/components/LandingPage/LandingPage"
import { AuthProvider } from "./context/AuthContext"
import { UserProvider } from "./context/UserContext"
import ProfilePage from "./assets/components/ProfilePage/ProfilePage"
import AuthenticationPage from "./assets/components/Authentication/AuthenticationPage"
import LoggedInLayout from "./assets/components/LoggedInLayout/LoggedInLayout"
import PrivateRoutes from "./assets/components/Authentication/PrivateRoutes"
import UserSettingsPage from "./assets/components/UserSettingsPage/UserSettingsPage"

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
