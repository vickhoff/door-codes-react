import { BrowserRouter, Routes, Route } from "react-router"
import { LoginPage } from "./assets/components/Authentication/LoginPage"
import { SignupPage } from "./assets/components/Authentication/SignupPage"
import { AuthLayout } from "./assets/components/Authentication/AuthLayout"
import { LandingPage } from "./assets/components/LandingPage/LandingPage"
import { AuthProvider } from "./context/AuthContext"
import {ProfilePage} from "./assets/components/ProfilePage/ProfilePage"
import AuthenticationPage from "./assets/components/Authentication/AuthenticationPage"

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<AuthenticationPage authType={"login"} />} />
        <Route path="signup" element={<AuthenticationPage authType={"signup"} />} />
        <Route element={<AuthLayout/>}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="me" element={<ProfilePage />} />
        

      </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
