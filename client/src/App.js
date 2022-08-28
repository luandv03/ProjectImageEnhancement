import { Routes, Route } from 'react-router-dom';

import Home from './components/Layout/Home/Home';
import Download from './components/Layout/Download/Download';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Home />
        }>
        </Route>
        <Route path='/download' element={
          <Download />
        }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
