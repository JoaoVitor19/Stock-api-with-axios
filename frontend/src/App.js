import * as React from "react";
import { Routes, Route} from "react-router-dom";
import TableProduct from './Telas/TableProduct/TableProduct';
import UpdateProduct from './Telas/UpdateProduct/UpdateProduct';
import CreateProduct from './Telas/CreateProduct/CreateProduct';
import CreateProvider from "./Telas/CreateProvider/CreateProvider";
import CreateType from "./Telas/CreateType/CreateType"
import EditType from "./Telas/CreateType/EditType"
import EditProvider from "./Telas/CreateProvider/EditProvider";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TableProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/types" element={<CreateType />} />
        <Route path="/provider" element={<CreateProvider />} />
        <Route path="/providerupdate" element={<EditProvider />} />
        <Route path="/typeupdate" element={<EditType />} />
      </Routes>
      </div>
  )
 }

export default App;