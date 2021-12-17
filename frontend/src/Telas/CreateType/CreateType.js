import React, { useEffect, useState } from "react";
import api from '../../api';
import Menu from '../../components/Menu/Menu';
import Button from '@mui/material/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import EditIcon from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function CreateType() {

    const [type, setType] = useState({});
    const [typeProduct, setTypeProduct] = useState([]);
    const [searchT, setSearchT] = useState("")

    const getTypes = async () => {
        const response = await api.get('/typeproduct')
        console.log(response)
        setTypeProduct(response.data)
        return response.data
    }
    useEffect(() => {
        getTypes()
    }, [])

    function changeType(props) {
        setType({
            ...type,
            type: props.target.value
        })
    }

    function onSubmitPostType(e) {
        api.post('/typeproduct/', {
            type: type.type
        })
        e.preventDefault()
        window.location.reload();
    }

    const handleDELETE = async (id) => {

        await api.delete(`/typeproduct/${id}`)

        window.location.reload();
    }
    return (
        <div>
            <Menu />
            <form onSubmit={onSubmitPostType}>
                <h2>Cadastro Tipo de Produto</h2>
                <TextField className="text" id="outlined-basic" required label="Tipo do Produto" variant="outlined" onChange={changeType} type="text" value={type.type} />
                <Button className="button" variant="outlined" type="submit" color="primary"> Cadastrar </Button>
            </form>
            <div>
                <div>
                    <TextField className="text" id="outlined-basic" label="Procurar Tipo" type="text" variant="outlined" onChange={(event) => { setSearchT(event.target.value) }} />
                </div>
                <TableContainer className="listmap-container">
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>ID</TableCell>
                                <TableCell align='center'>Tipo</TableCell>
                                <TableCell align='center'>Editar</TableCell>
                                <TableCell align='center'>Remover</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {(typeProduct).filter((types) => {
                                if (searchT === "") {
                                    return types
                                } else if (types.type.toLowerCase().includes(searchT.toLowerCase())) {
                                    return types
                                }
                            }).map((types, index) => {
                                return (
                                    <TableRow key={types.id}>
                                        <TableCell align='left'>{types.id}</TableCell>
                                        <TableCell align='left'>{types.type}</TableCell>
                                        <TableCell align="center">
                                            <Link to={{ pathname: '/typeupdate' }}><IconButton><EditIcon></EditIcon></IconButton></Link>
                                        </TableCell>
                                            <TableCell align='center'>
                                                <IconButton onClick={() => handleDELETE(types.id)}>
                                                    <DeleteIcon></DeleteIcon>
                                                </IconButton>
                                            </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>;
                )
            </div>
        </div>
    )
}