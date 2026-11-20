import { useParams } from "react-router-dom";
import Editor from "../Component/Editor"

const DocumentPage = () => {
    const documentId = useParams().id; // Get the document ID from the URL parameters
  return (
    <div>
    <div style={{padding:'2rem'}}>
      <h2>Weave - sync test</h2>
      <p>Document ID: {documentId}</p>
     <Editor key={documentId} docId={documentId} className='border-4 border-gray-300 rounded-lg p-4'/>
    </div>
    </div>
  )
}

export default DocumentPage