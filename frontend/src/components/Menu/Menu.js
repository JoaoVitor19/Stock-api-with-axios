import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <div className="container-menu">
            <div>
                <h1 className="h1-menu">Controle de Estoque</h1>
                </div>
            </div>
            <div className="section-menu">
                <Link to="/"><button data-testid="button-stock">Estoque Atual</button></Link>
                <Link to="/create"><button>Criar Produto</button></Link>
                <Link to="/provider"><button data-testid="button-create"> Criar Fornecedores</button></Link>
                <Link to="/types"><button>Tipo de Produto</button></Link>
                <Link to="/update"><button data-testid="button-update">Alterar Produto</button></Link>
            </div>
            </div>
    )
}