import { BrowserRouter, Routes, Route } from "react-router"
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
        <Route path="me" element={<ProfilePage />} />
        

      </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
