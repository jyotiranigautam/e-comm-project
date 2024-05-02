import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/admin/ManageProducts';

// import ManageCategories from './pages/adminDashboard/ManageCategories';
// import AddProduct from './pages/adminDashboard/AddProduct';
// import EditProduct from './pages/adminDashboard/EditProducts';
// import AddCategory from './pages/adminDashboard/AddCategory';


const App = () => {
  return (
    // <div>app</div>
    
    <BrowserRouter>
      <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/about" element= {<About />}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/dashboard" element= {<Dashboard/>}/>
          <Route path="/contact" element={<Contact />} />   
          <Route path="/manage-products" element= {<ManageProducts />}/>
          {/* <Route path="/manage-categories" element= {<ManageCategories/>}/> */}
          {/* <Route path="/add-product" element= {<AddProduct />}/> */}
          {/* <Route path="/edit-product" element= {<EditProduct />}/> */}
          {/* <Route path="/add-category" element= {<AddCategory />}/> */}
          
      </Routes>
    </BrowserRouter>
  )
}

export default App

