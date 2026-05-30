import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ButtonDemo from "./pages/ButtonDemo";

import './App.css'

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind CSS Working 🚀
      </h1>
      <ButtonDemo/>
    </div>
  );
}


export default App
