import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

function App() {
  return (
  <>
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
     </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
