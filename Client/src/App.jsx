// import { useEffect, useState } from "react"
// import * as Y from 'yjs'
// import { WebsocketProvider } from 'y-websocket'

import Editor from "./Component/Editor"

const App = () => {
  return (
    <div style={{padding:'2rem'}}>
      <h2>Weave - sync test</h2>
     <Editor className='border-4 border-gray-300 rounded-lg p-4'/>
    </div>
  )
}

export default App
