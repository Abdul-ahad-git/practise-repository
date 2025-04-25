
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './styles/global.css';
import PreviewComponent from './pages/PreviewComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LandingPage />} />
          <Route path='/previewComponent' element={<PreviewComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
