import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>

        <Link to="/doc/1" className="text-white">Document 1</Link>
        <br />
        <Link to="/doc/2" className="text-white">Document 2</Link>


    </div>
  )
}

export default Dashboard