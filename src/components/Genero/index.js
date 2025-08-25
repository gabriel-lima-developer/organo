import './Genero.css';
import Artista from '../Artista';
import hexToRgba from 'hex-to-rgba';

const Genero = ({artistas, genero, onDeleteArtista, onFavoriteArtista, onChangeColor}) => {
    return (
        (artistas.length > 0) && <section className='genero' style={{ backgroundColor: hexToRgba(genero.cor, '0.6') }}>
            <input type='color' className='inputColor' value={genero.cor} onChange={x => onChangeColor(x.target.value, genero.id)}/>
            <h3 style={{ borderColor: genero.cor }}>{genero.nome}</h3>
            <div className='artistas'>
                {artistas.sort((a, b) => a.rank - b.rank).map((artista, index) => {                    
                    return (
                        <Artista 
                            key={index} 
                            artista={artista} 
                            backgroundColor={genero.cor} 
                            onDelete={onDeleteArtista} 
                            onFavorite={onFavoriteArtista} 
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Genero;