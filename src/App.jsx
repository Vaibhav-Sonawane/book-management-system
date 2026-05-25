import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <header>
          <h1>Book Management System</h1>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Book</Link>
          </nav>
        </header>
        <Outlet/>
      </div>
    </>
  )
}

export default App

