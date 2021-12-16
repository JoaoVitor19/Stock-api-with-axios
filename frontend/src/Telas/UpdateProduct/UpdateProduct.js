import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button'
import api from '../../api'


 export default function UpdateProduct(){

    const [product, setProduct] = useState({})

    const handleChange = ({ target: { name, value } }) => {
        setProduct(({ ...product, [name]: value, }))
    }

    const handleSubmit = async (id) => {
        await api.put(`/product/${id}`, product);
    }

    return (
        <div>
            <Menu />
            <form onSubmit={handleSubmit(product.id)}>
                <h2>Editar dados do Produto</h2>
                <TextField className="text" id="outlined-basic" required label="ID" variant="outlined" onChange={handleChange} type="number" name="id" value={product.id} />
                <TextField className="text" id="outlined-basic"  label="Nome do Produto" variant="outlined" onChange={handleChange} type="text" name="name" value={product.name} />
                <TextField className="text" id="outlined-basic"  label="Quantidade" variant="outlined" onChange={handleChange} type="text" name="quantity" value={product.quantity} />
                <TextField className="text" id="outlined-basic"  label="Valor de Compra" variant="outlined" onChange={handleChange} type="text" name="valueBuy" value={product.valueBuy} />
                <TextField className="text" id="outlined-basic"  label="Valor de Venda" variant="outlined" onChange={handleChange} type="text" name="valueSell" value={product.valueSell} />
                <Button className="button" variant="contained"  color="secondary" type="submit"> Salvar Alterações </Button>
            </form>
        </div>
    );
}