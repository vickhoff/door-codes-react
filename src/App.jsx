import { BrowserRouter, Routes, Route } from "react-router"
import { LoginPage } from "./assets/components/Authentication/LoginPage"
import { SignupPage } from "./assets/components/Authentication/SignupPage"
import { AuthLayout } from "./assets/components/Authentication/AuthLayout"
import { LandingPage } from "./assets/components/LandingPage/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<AuthLayout/>}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
