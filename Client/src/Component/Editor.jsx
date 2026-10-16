import {useEditor,EditorContent}from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from "react"
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCaret  from '@tiptap/extension-collaboration-caret'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Collaboration,
      // CollaborationCaret
    ],
  })

  return (
      <EditorContent  editor={editor} className='border-4 border-gray-300 rounded-lg p-4'/>
  )
}

export default Editor