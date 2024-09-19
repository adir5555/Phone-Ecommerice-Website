import { Route, Routes } from 'react-router-dom'
import './App.css'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Page from './Pages/Page'

import Home from './Pages/Home'

import Header from './Coomon/Header'
import Footer from './Coomon/footer/Footer'


function App() {
  
  return (
   <div className="">
  
   <Header ></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/' element={<Blog></Blog>}></Route>
      <Route path='/' element={<Product></Product>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/' element={<Page></Page>}></Route>
    </Routes>
    <Footer></Footer>
   </div>
  )
}

export default App
