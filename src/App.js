import './css/normalize.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;
