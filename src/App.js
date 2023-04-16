//Importing Router to define routes in the app
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Router> {/* Wrap the entire application in a Router component to enable routing */}
      <Header />{/* We keep this outside routes since it is common in all the pages  */}
        <Routes> {/*Define the routes for the application using the Routes component */}
          <Route exact path='/' element={<Login />} /> {/* Define a specific route for the Login component */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
