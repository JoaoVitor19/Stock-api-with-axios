import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button'
import api from '../../api'

export default function EditProvider(){

    const [provider, setProvider] = useState({})

    const handleChange = ({ target: { name, value } }) => {
        setProvider(({ ...provider, [name]: value, }))
    }

    const handleSubmit = async (id) => {
        await api.put(`/provider/${id}`, provider);
    }

    return (
        <div>
            <Menu />
            <form onSubmit={handleSubmit(provider.id)}>
                <h2>Editar dados do Fornecedor</h2>
                <h2>*Não pode repetir email nem CNPJ*</h2>
                <TextField className="text" id="outlined-basic" required label="ID" variant="outlined" onChange={handleChange} type="number" name="id" value={provider.id} />
                <TextField className="text" id="outlined-basic"  label="Nome" variant="outlined" onChange={handleChange} type="text" name="name" value={provider.name} />
                <TextField className="text" id="outlined-basic"  label="Email" variant="outlined" onChange={handleChange} type="text" name="mail" value={provider.mail} />
                <TextField className="text" id="outlined-basic"  label="Cnpj" variant="outlined" onChange={handleChange} type="text" name="cnpj" value={provider.cnpj} />
                <Button className="button" variant="contained"  color="secondary" type="submit"> Salvar Alterações </Button>
            </form>
        </div>
    )
}