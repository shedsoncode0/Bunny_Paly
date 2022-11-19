import './App.css';
import { Welcome, Join, Discorver, Main } from './pages/pagesExport';
import { Navbar } from '../src/components/componetsExport'
import MusicCard from './components/MusicCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='flex h-screen flex-col bg-[#2F303A] w-screen relative'>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Navbar />}> */}
          {/* <Switch> */}
          <Route index element={<Welcome />} />
          <Route path='/join' element={<Join />} />
          <Route path='/discover' element={<Discorver />} />
          <Route path='/main' element={<Main />} />
          {/* </Switch> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
