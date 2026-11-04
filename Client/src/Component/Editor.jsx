import {useEditor,EditorContent}from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from "react"
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCaret  from '@tiptap/extension-collaboration-caret'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:1234', 'my-document', ydoc)

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        undoRedo: false,
      }),
       Collaboration.configure({
        document: ydoc,
      }),
      // CollaborationCaret
    ],
  })

  return (
    <div>
      <button onClick={() => editor.chain().focus().toggleHeading().run()}>H1</button>
      <EditorContent  editor={editor} className='border-4 border-gray-300 rounded-lg p-4'/>
      <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
    </div>
  )
}

export default Editor