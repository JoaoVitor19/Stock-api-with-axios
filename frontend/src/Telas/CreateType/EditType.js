import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Menu from "../../components/Menu/Menu"
import Button from '@material-ui/core/Button'
import api from '../../api'

export default function EditType(){

    const [type, setType] = useState({})

    const handleChange = ({ target: { name, value } }) => {
        setType(({ ...type, [name]: value, }))
    }

    const handleSubmit = async (id) => {
        await api.put(`/typeproduct/${id}`, type);
        
    }

    return (
        <div>
            <Menu />
            <form onSubmit={handleSubmit(type.id)}>
                <h2>Editar o tipo de produto</h2>
                <h2>*Não pode existir*</h2>
                <TextField className="text" id="outlined-basic" required label="ID" variant="outlined" onChange={handleChange} type="number" name="id" value={type.id} />
                <TextField className="text" id="outlined-basic"  label="Nome" variant="outlined" onChange={handleChange} type="text" name="type" value={type.name} />
                <Button className="button" variant="contained"  color="secondary" type="submit"> Salvar Alterações </Button>
            </form>
        </div>
    )
}