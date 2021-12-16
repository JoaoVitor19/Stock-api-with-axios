import * as React from "react";
import { Routes, Route} from "react-router-dom";
import TableMaterial from './Telas/TableProduct/TableMaterial';
// import ProductCreate from './Telas/CreateProduct'
import UpdateProduct from './Telas/UpdateProduct/UpdateProduct'
import CreateProduct from './Telas/CreateProduct/CreateProduct'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TableMaterial />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        {/* <Route path="/create" element={<ProductCreate />} /> */}
      </Routes>
      </div>
 )
 }

export default App;