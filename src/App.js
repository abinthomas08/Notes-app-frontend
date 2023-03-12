import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navabar from './components/HomePage/Navbar/Navabar'


function App() {
  return (
    <div className="App">
      <Navabar/>
      <AllRoutes/>
   
    </div>
  );
}

export default App;
