// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./components/About";
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import SinglePost from './components/SinglePost';
import Update from './components/Update';

function App() {


  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<HomePage  />} />
              <Route path='/about' element={<About  />} />
              <Route path='/post/:postId' element={<SinglePost  />} />
              <Route path='/updatepost/:postId' element={<Update  />} />

          </Route>
        </Routes>  
       

     </BrowserRouter>
    
  ); 
}

export default App;

