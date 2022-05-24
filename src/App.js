/* eslint-disable no-unused-vars */
import { Route, Routes, BrowserRouter  } from "react-router-dom"
import Login from "./views/Login";
import HomePage from "./views/HomePage"
import NotFoundView from "./views/NotFoundView";
import Nav from "./components/Nav";

export default function App(){
  return (
 <BrowserRouter>
  <Nav />
    <Routes>
      <Route path='/'element={<Login/>} />
      <Route path='/roles'element={<HomePage/>} />
      <Route path='/home'element={<HomePage/>} />
      <Route path="*" element={<NotFoundView/>} />
      </Routes>
 </BrowserRouter>
  
  );
}


