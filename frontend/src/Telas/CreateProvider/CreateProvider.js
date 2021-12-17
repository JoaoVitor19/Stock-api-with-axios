import React, { useEffect, useState } from "react";
import api from '../../api'
import TextField from '@mui/material/TextField';
import Menu from '../../components/Menu/Menu'
import Button from '@mui/material/Button';
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Table from '@material-ui/core/Table';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CreateProvider() {

    const [provider, setProvider] = useState({});
    const [search, setSearch] = useState("");

    const getProvider = async () => {
        const response = await api.get('/provider')
        console.log(response)
        setProvider(response.data)
        return response.data
    }
    useEffect(() => {
        getProvider()
    }, [])

    function changeName(props) {
        setProvider({
            ...provider,
            name: props.target.value
        })
    }

    function changeMail(props) {
        setProvider({
            ...provider,
            mail: props.target.value
        })
    }

    function changeCnpj(props) {
        setProvider({
            ...provider,
            cnpj: props.target.value
        })
    }

    function onSubmitPost(e) {
        api.post('/provider/', {
            name: provider.name,
            mail: provider.mail,
            cnpj: provider.cnpj,
        })
        e.preventDefault();
        window.location.reload();
    }

    const handleDELETE = async (id) => {

        await api.delete(`/provider/${id}`)

        window.location.reload();
    }

    return (

        <div>
            <Menu />
            <form onSubmit={onSubmitPost}>
                <h2>Cadastro de novo Fornecedor</h2>
                <TextField className="text" id="outlined-basic" required label="Nome do Fornecedor" variant="outlined" onChange={changeName} type="text" value={provider.name} />
                <TextField className="text" id="outlined-basic" required label="Email do Fornecedor" variant="outlined" onChange={changeMail} type="text" value={provider.mail} />
                <TextField className="text" id="outlined-basic" required label="Cnpj do Fornecedor" variant="outlined" onChange={changeCnpj} type="text" value={provider.cnpj} />
                <Button className="button" variant="outlined" type="submit" color="primary"> Cadastrar </Button>
            </form>
            <div>
                <div>
                    <TextField className="text" id="outlined-basic" label="Procurar Fornecedor" type="text" variant="outlined" onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                <TableContainer className="listmap-container">
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>ID</TableCell>
                                <TableCell align='center'>Nome</TableCell>
                                <TableCell align='center'>Email</TableCell>
                                <TableCell align='center'>CNPJ</TableCell>
                                <TableCell align='center'>Deletar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {Object.values(provider).filter((providers) => {
                                if (search === "") {
                                    return providers
                                } else if (providers.name.toLowerCase().includes(search.toLowerCase())) {
                                    return providers
                                }
                            }).map((providers, index) => {
                                return (
                                    <TableRow key={providers.id}>
                                        <TableCell align='center'>{providers.id}</TableCell>
                                        <TableCell align='center'>{providers.name}</TableCell>
                                        <TableCell align='center'>{providers.mail}</TableCell>
                                        <TableCell align='center'>{providers.cnpj}</TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => handleDELETE(providers.id)}>
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