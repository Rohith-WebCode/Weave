import {useEditor,EditorContent}from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// import { useEffect, useState } from "react"
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCaret  from '@tiptap/extension-collaboration-caret'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:1234', 'my-document', ydoc)

const users = [
  { name: 'User 1', color: '#ff0000' },
  { name: 'User 2', color: '#00ff00' },
  { name: 'User 3', color: '#0000ff' },
]
const currentUser = users[Math.floor(Math.random() * users.length)]

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        undoRedo: false,
      }),
       Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCaret.configure({
        provider: provider,
        user: currentUser,
      }),
    ],
  })

  return (
    <div>
      <div className='flex gap-2 mb-4'>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
      <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
      </div>
      <EditorContent  editor={editor} className='border-4 border-gray-300 rounded-lg p-4'/>
    </div>
  )
}

export default Editor