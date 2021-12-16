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
                <Link to="/"><button>Estoque Atual</button></Link>
                <Link to="/create"><button>Criar Produto</button></Link>
                <Link to="/update"><button>Alterar Produto</button></Link>
            </div>
            </div>
    )
}