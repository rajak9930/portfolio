import {Routes,Route, Navigate} from 'react-router-dom'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Experience from './Pages/Experience';
import Home from './Pages/Home';
import Project from './Pages/Project';
import './Style/Navbar.css';
import './Style/Footer.css'
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/project/:id' element={<ProjectDisplay/>}/>
    <Route path='/experience' element={<Experience/>}/>
    <Route path='/*' element={<Navigate to="/" />}/>
  </Routes>
<Footer/>
    </div>
  );
}

export default App;
