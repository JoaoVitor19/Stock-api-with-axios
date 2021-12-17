import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../../api';
import './Table.css'

export default function TableProduct() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const getProduct = async () => {
        const response = await api.get('/product')
        console.log(response)
        setData(response.data)
        return response.data
    }
    useEffect(() => {
        getProduct()
    }, [])

    const handleDELETE = async (id) => {

        await api.delete(`/product/${id}`)

        window.location.reload();
    }
    return (
        <div>
            <Menu />
            <div>
                <TextField className="text" id="outlined-basic" label="Procurar Produto" type="text" variant="outlined" onChange={(event) => { setSearch(event.target.value) }} />
            </div>
            <TableContainer className="listmap-container">
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='left'>Produto</TableCell>
                            <TableCell align='left'>Quantidade</TableCell>
                            <TableCell align='left'>Valor Compra</TableCell>
                            <TableCell align='left'>Valor Venda</TableCell>
                            <TableCell align='left'>Tipo de Produto</TableCell>
                            <TableCell align='left'>Fornecedor</TableCell>
                            <TableCell align='left'>CNPJ Fornecedor</TableCell>
                            <TableCell align='left'>Editar</TableCell>
                            <TableCell align='center'>Remover</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {data.filter((product) => {
                            if (search === "") {
                                return product
                            } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
                                return product
                            }
                        }).map((product, index) => {
                            return (
                                <TableRow key={product.id}>
                                    <TableCell align='left'>{product.id}</TableCell>
                                    <TableCell align='left'>{product.name}</TableCell>
                                    <TableCell align='left'>{product.quantity}</TableCell>
                                    <TableCell align='left'>{product.valueBuy}</TableCell>
                                    <TableCell align='left'>{product.valueSell}</TableCell>
                                    <TableCell align='left'>{product.typeProduct.type}</TableCell>
                                    <TableCell align='left'>{product.provider.name}</TableCell>
                                    <TableCell align='left'>{product.provider.cnpj}</TableCell>
                                    <TableCell align="center">
                                        <Link to={{ pathname: '/update' }}><IconButton><EditIcon></EditIcon></IconButton></Link>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <IconButton onClick={() => handleDELETE(product.id)}>
                                            <DeleteIcon></DeleteIcon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            );
        </div>
    )
}

