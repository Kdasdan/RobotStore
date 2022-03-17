import { Routes, Route } from 'react-router-dom';
import AddRobot from './components/container/robots/AddRobot';
import EditRobot from './components/container/robots/EditRobot';
import ShowRobots from './components/container/robots/ShowRobots';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SearchRobot from './components/container/robots/SearchRobot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="" element={<ShowRobots />} />
        <Route path="/add-robot" element={<AddRobot />} />
        <Route path="/edit-robot/:id" element={<EditRobot />} />
        <Route path="/search-robot" element={<SearchRobot />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;