import './App.css';
import Friends from './screens/Friends';
import Home from './screens/Home';
import Post from './screens/Post';
import Profile from './screens/Profile';
import Navbar from './components/NavBar';
import Eventos from './screens/Events';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />{/* este es un componente con mi barra de menu */}
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Events" element={<Eventos />} />
      </Routes>
    </div>
  );
}

export default App;
