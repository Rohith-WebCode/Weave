// import { useEffect, useState } from "react"
// import * as Y from 'yjs'
// import { WebsocketProvider } from 'y-websocket'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocumentPage from './Pages/DocumentPage'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doc/:id" element={<DocumentPage />} />
      </Routes>
    </BrowserRouter>
  </div>

  )
}

export default App
