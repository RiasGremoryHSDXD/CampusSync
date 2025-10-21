import { Link } from "react-router-dom"


export default function index() {

  return (
    <nav
      className="flex gap-4 p-4"
    >
      <Link to="/">Log In</Link>
      <Link to="/home">Home</Link>
      <Link to="/lost&found">Lost & Foundsss</Link>
      <Link to="/event">Event</Link>
      <Link to="/announcement">wew</Link>
    </nav>
  )
}
