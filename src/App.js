import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className='App'>
      <Header/>
      <main>
        <Routes>
          <Route path='/mainPage' element={<MainPage/>}/>
          <Route path='/Catalog' element={<Catalog/>}/>
        </Routes>
      </main>
      <footer>
        Футер
      </footer>
    </div>
  );
}

export default App;
