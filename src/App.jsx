import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react'
import { Login } from "./assets/components/Authentication/Login"
import { Signup } from "./assets/components/Authentication/Signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
