import {useState,useEffect} from 'react'
import './CreateProduct.css';
import TextField from '@mui/material/TextField';
import api from '../../api'
import Menu from '../../components/Menu/Menu'
import Button from '@material-ui/core/Button'

export default function CreateProduct() {

    const data = {
        name: "",
        quantity: "",
        valueBuy: "",
        valueSell: "",
        typeProduct: {
            type: "",
        },
        provider: {
            name: "",
            mail: "",
            cnpj: "",
        },
    }

    const [typeProduct,setTypeProduct ] = useState("");
    
    const [product, setProduct] = useState(data);

    const getProduct = async () => {
        const response = await api.get('/product')
        console.log(response)
        getProduct(response.data)
        return response.data
    }

    const onChange = (e) => {
        setProduct(e)
    }
    

    const handleSubmit = async (id) => {
        await api.post(`/product/${id}`, product);
    }

    return (
        <div>
            <Menu />
            <form onSubmit={handleSubmit}>
                <h2>Criar Produto</h2>
                <TextField
                    className="text" id="outlined-basic"
                    label="Nome do Produto"
                    variant="outlined"
                    type="text" name="Produto"
                    onChange={e => onChange(e.target.value)}
                    value={product.name}
                />
                <TextField
                    className="text" id="outlined-basic"
                    label="Quantidade" variant="outlined" 
                    type="number" name='product.quantity'
                    onChange={e => onChange(e.target.value)}
                    value={product.quantity}
                />
                <TextField
                    className="text" id="outlined-basic"
                    label="Valor de Compra" variant="outlined"
                     type="number"
                     onChange={e => onChange(e.target.value)}
                     value={product.valueBuy}
                />
                <TextField
                    className="text" id="outlined-basic"
                    label="Valor de Venda" variant="outlined"
                     type="number"
                     onChange={e => onChange(e.target.value)}
                     value={product.valueSell}
                />
                {/* <TextField
                    className="text" id="outlined-basic"
                    label="Tipo de Produto" variant="outlined"
                     type="text"
                     onChange={e => onChange(e.target.value)}
                     value={product.typeProduct.type}
                />
                <TextField
                    className="text" id="outlined-basic"
                    label="Nome do Fornecedor" variant="outlined"
                     type="text"
                     onChange={e => onChange(e.target.value)}
                     value={product.provider.name}
                />
                {/* <TextField
                    className="text" id="outlined-basic"
                    label="Cnpj do Fornecedor" variant="outlined"
                     type="number"
                     onChange={e => onChange(e.target.value)}
                     value={product.provider.cnpj}
                />
                <TextField
                    className="text" id="outlined-basic"
                    placeholder='Email do Fornecedor' variant="outlined"
                    onChange={e => onChange(e.target.value)}
                    value={product.provider.mail}
                /> */}
                <Button 
                className="button"  variant="contained"  
                color="secondary" type="submit"> Salvar Alterações </Button>
            </form>
        </div>
    );
}