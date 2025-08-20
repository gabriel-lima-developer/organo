import Colaborador from '../Colaborador';
import './Team.css';

const Team = (props) => {
    return (
        <section className='team' style={{ backgroundColor: props.primaryColor }}>
            <h3 style={{ borderColor: props.secundaryColor }}>{props.name}</h3>
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </section>
    )
}

export default Team;