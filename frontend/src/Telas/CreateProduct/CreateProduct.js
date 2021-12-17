import React, { useEffect, useState } from "react";
import api from '../../api'
import TextField from '@mui/material/TextField';
import Menu from '../../components/Menu/Menu'
import Button from '@mui/material/Button';

export default function CreateProduct() {

    const [product, setProduct] = useState({})

    function changeName(props) {
        setProduct({
            ...product,
            name: props.target.value
        })
    }

    function changeQuantity(props) {
        setProduct({
            ...product,
            quantity: props.target.value
        })
    }

    function changeValueBuy(props) {
        setProduct({
            ...product,
            valueBuy: props.target.value
        })
    }

    function changeValueSell(props) {
        setProduct({
            ...product,
            valueSell: props.target.value
        })
    }

    function changeTypeProduct(props) {
        setProduct({
            ...product,
            typeProduct: props.target.value
        })
    }

    function changeProvider(props) {
        setProduct({
            ...product,
            provider: props.target.value
        })
    }

    function onSubmitPost(e) {
        api.post('/product/', {
            name: product.name,
            quantity: product.quantity,
            valueBuy: product.valueBuy,
            valueSell: product.valueSell,
            typeProduct: {
                id: product.typeProduct
            },
            provider: {
                id: product.provider
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <Menu />
            <form onSubmit={onSubmitPost}>
                <h2>Cadastro de novo Produto</h2>
                <TextField className="text" id="outlined-basic" required label="Nome do Produto" variant="outlined" onChange={changeName} type="text" value={product.name} />
                <TextField className="text" id="outlined-basic" required label="Quantidade" variant="outlined" onChange={changeQuantity} type="text" value={product.quantity} />
                <TextField className="text" id="outlined-basic" required label="Valor de Venda" variant="outlined" onChange={changeValueBuy} type="text" value={product.valueBuy} />
                <TextField className="text" id="outlined-basic" required label="Valor de Compra" variant="outlined" onChange={changeValueSell} type="text" value={product.valueSell} />
                <TextField className="text" id="outlined-basic" required label="Tipo de Produto" variant="outlined" onChange={changeTypeProduct} type="text" value={product.typeProduct} />
                <TextField className="text" id="outlined-basic" required label="Tipo de Produto" variant="outlined" onChange={changeProvider} type="text" value={product.provider} />
                <Button className="button" variant="outlined" type="submit" color="primary"> Cadastrar </Button>
            </form>
        </div>
    )
}