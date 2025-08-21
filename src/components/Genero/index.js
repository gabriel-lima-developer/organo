import Artista from '../Artista';
import './Genero.css';

const Genero = ({artistas, genero}) => {
    return (
        (artistas.length > 0) && <section className='genero' style={{ backgroundColor: genero.coPrimaria }}>
            <h3 style={{ borderColor: genero.corSecundaria }}>{genero.name}</h3>
            <div className='artistas'>
                {artistas.sort((a, b) => a.rank - b.rank).map(x => <Artista
                    key={x.nome}
                    artista={x}
                    backgroundColor={genero.corSecundaria}
                />)}
            </div>
        </section>
    )
}

export default Genero;