import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';

function App() {
  const title = "Correction checkpoint 2"

  return (
    <div className="App">
      <Header title={title} />
      <Routes>
        <Route path='/' element={<GameList />} />
      </Routes>
    </div>
  );
}

export default App;
